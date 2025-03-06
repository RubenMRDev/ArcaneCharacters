import { useEffect, useState } from 'react';
import './App.css';
import charactersData from './data/characters.json';
import { Character } from './types/character';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import FilterButtons from './components/FilterButtons/FilterButtons';
import CharacterCard from './components/CharacterCard/CharacterCard';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    setCharacters(charactersData.characters);
  }, []);

  const filterCategories = [
    { id: 'all', label: 'All Characters' },
    { id: 'protagonist', label: 'Protagonists', roles: ['Protagonist'] },
    { id: 'antagonist', label: 'Antagonists', roles: ['Antagonist'] },
    { id: 'secondary', label: 'Secondary Characters', roles: ['Secondary Character'] }
  ];

  const filteredCharacters = characters.filter(character => {
    const matchesSearch = 
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedFilter === 'all') return matchesSearch;

    const category = filterCategories.find(cat => cat.id === selectedFilter);
    return matchesSearch && category?.roles?.includes(character.role);
  });

  return (
    <div className="app">
      <Header />
      <div className="filters-section">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <FilterButtons
          categories={filterCategories}
          selectedFilter={selectedFilter}
          onFilterSelect={setSelectedFilter}
        />
      </div>
      <main className="characters-grid">
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))}
      </main>
    </div>
  )
}

export default App
