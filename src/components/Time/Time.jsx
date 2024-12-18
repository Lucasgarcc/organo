import Collaborator from '../Collaborator/Collaborator';
import './Time.css';
import background from '/src/assets/imagens/fundo.png';
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, collaborator = [], deleteCollaborator, changeColorTime }) => {
  const filteredCollaborators = collaborator.filter(
    (colab) => colab.time === time.name
  );

  return (
    filteredCollaborators.length > 0 && (
      <section
        className="time"
        style={{ backgroundImage: `url(${background})`, backgroundColor: hexToRgba(time.color,'.5') }}
      >
        <input
          value={time.color}
          type="color"
          className="input-color"
          onChange={(event) =>
            changeColorTime(event.target.value, time.name)
          }
        />
        <h3 style={{ borderColor: time.color }}>{time.name}</h3>
        <div className="time-collaborators">
          {filteredCollaborators.map((colab, index) => (
            <Collaborator
              key={index}
              name={colab.name}
              image={colab.image}
              alt={`Imagem de ${colab.name}`}
              position={colab.position}
              colorBackgroud={time.color}
              deleteCollaborator={deleteCollaborator}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
