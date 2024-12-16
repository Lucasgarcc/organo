import Collaborator from '../Collaborator/Collaborator';
import './Time.css';

const Time = ({ title, colorBackground, colorPrimary, colorCard, collaborator = [] }) => {


  return (
   (collaborator.length > 0) &&
    <section className='time' style={{backgroundColor: colorBackground}}>
      <h3 style={{borderColor: colorCard}}>{title}</h3>
      <div className='time-collaborators'>
      {collaborator.length > 0 ? (
        collaborator
        .filter((colab) => colab.time === title)
        .map((colab) => (
          <Collaborator
            key={colab.name}
            name={colab.name}
            image={colab.image}
            alt={`Imagem de ${colab.name}`}
            position={colab.position}
            colorBackgroud={colorCard}
          />
        ))
      ) :(      
        <p>Nenhum colaborador neste time ainda.</p>
      )}
      </div>

    </section>
  );
};

export default Time;