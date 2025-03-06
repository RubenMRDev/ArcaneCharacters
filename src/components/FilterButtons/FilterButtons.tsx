import './FilterButtons.css';

interface FilterCategory {
  id: string;
  label: string;
  roles?: string[];
}

interface FilterButtonsProps {
  categories: FilterCategory[];
  selectedFilter: string;
  onFilterSelect: (filterId: string) => void;
}

const FilterButtons = ({ categories, selectedFilter, onFilterSelect }: FilterButtonsProps) => {
  return (
    <div className="filter-buttons">
      {categories.map(category => (
        <button
          key={category.id}
          className={`filter-button ${selectedFilter === category.id ? 'active' : ''}`}
          onClick={() => onFilterSelect(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;