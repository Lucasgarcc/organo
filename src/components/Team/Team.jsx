import Collaborator from '../Collaborator/Collaborator';
import background from '/src/assets/imagens/fundo.png';
import hexToRgba from 'hex-to-rgba';
import './Team.css';

const Time = ({ team, collaborator = [], deleteCollaborator, changeColorTeam, toggleFavorite }) => {

  const filteredCollaborators = collaborator.filter(
    (colab) => colab.team === team.name
  );

  return (
    filteredCollaborators.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: hexToRgba(team.color, '0.5'),
        }}
      >
        {/* Input para alterar a cor do time */}
        <input
          value={team.color}
          type="color"
          className="input-color"
          onChange={(event) => changeColorTeam(event.target.value, team.id)}
        />
        <h3 style={{ borderColor: team.color }}>{team.name}</h3>
        <div className="time-collaborators">
          
          {/* Mapeia e renderiza os colaboradores do time */}
          {filteredCollaborators.map((colab) => (
            <Collaborator
              key={colab.id}
              id={colab.id}
              name={colab.name}
              image={colab.image}
              alt={`Imagem de ${colab.name}`}
              position={colab.position}
              colorBackgroud={team.color}
              deleteCollaborator={deleteCollaborator}
              toggleFavorite={toggleFavorite}
              favorite={colab.favorite}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;