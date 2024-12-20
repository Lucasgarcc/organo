import Collaborator from '../Collaborator/Collaborator';
import './Team.css';
import background from '/src/assets/imagens/fundo.png';
import hexToRgba from 'hex-to-rgba';

const Time = ({ team, collaborator = [], deleteCollaborator, changeColorTeam }) => {
  const filteredCollaborators = collaborator.filter(
    (colab) => colab.team === team.name
  );

  return (
    filteredCollaborators.length > 0 && (
      <section
        className="time"
        style={{ backgroundImage: `url(${background})`, backgroundColor: hexToRgba(team.color,'.5') }}
      >
        <input
          value={team.color}
          type="color"
          className="input-color"
          onChange={(event) =>
          changeColorTeam(event.target.value, team.id)
          }
        />
        <h3 style={{ borderColor: team.color }}>{team.name}</h3>
        <div className="time-collaborators">
          {filteredCollaborators.map((colab, index) => (
            <Collaborator
              key={index}
              name={colab.name}
              image={colab.image}
              alt={`Imagem de ${colab.name}`}
              position={colab.position}
              colorBackgroud={team.color}
              deleteCollaborator={deleteCollaborator}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;