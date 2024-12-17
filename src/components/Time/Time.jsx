import Collaborator from '../Collaborator/Collaborator';
import './Time.css';

const Time = ({ title, colorBackground, colorCard, deleteCollaborator,collaborator = [] }) => {
  const filteredCollaborators = collaborator.filter(
    (colab) => colab.time === title
  );

  return (
    filteredCollaborators.length > 0 && (
      <section className="time" style={{ backgroundColor: colorBackground }}>
        <h3 style={{ borderColor: colorCard }}>{title}</h3>
        <div className="time-collaborators">
          {filteredCollaborators.map((colab, index) => {
            return (
              <Collaborator
                key={index} // Use o ID único
                name={colab.name}
                image={colab.image}
                alt={`Imagem de ${colab.name}`}
                position={colab.position}
                colorBackgroud={colorCard}
                deleteCollaborator={deleteCollaborator}
              />
            )}
          )}
        </div>
      </section>
    )
  );
};

export default Time;
