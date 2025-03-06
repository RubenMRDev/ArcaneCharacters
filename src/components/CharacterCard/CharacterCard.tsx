import { Character } from '../../types/character';
import './CharacterCard.css';
import Swal from 'sweetalert2';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const handleClick = () => {
    Swal.fire({
      title: character.name,
      html: `
        <div class="character-popup" style="background: rgba(0, 0, 0, 0.5); padding: 20px; border-radius: 15px;">
          <h3 style="color: rgb(224, 212, 231); font-size: 1.2rem; margin-bottom: 10px;">${character.fullName}</h3>
          <p style="color: #fff; margin-bottom: 10px;">${character.description}</p>
          <p style="color: #ccc; font-size: 0.9rem;">${character.background}</p>
        </div>
      `,
      width: '500px',
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        popup: 'character-popup-container'
      },
      background: '#1a1a1a'
    });
  };

  return (
    <div className="character-card" onClick={handleClick}>
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-info">
        <h2>{character.name}</h2>
        <h3>{character.fullName}</h3>
        <p className="role">{character.role}</p>
        <p className="description">{character.description}</p>
        <p className="background">{character.background}</p>
      </div>
    </div>
  );
};

export default CharacterCard;