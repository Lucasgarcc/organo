import Collaborator from '../Collaborator/Collaborator';
import './Time.css';

const Time = ({ title, colorBackground, colorCard, times }) => {

  return (
    <section className='time' style={{backgroundColor: colorBackground}}>
      <h3 style={{borderColor: colorCard}}>{title}</h3>
      <div className='time-collaborators'>
        <Collaborator name='Lucas' image='https://portfoliogarcia-beta.vercel.app/assets/img/perfil.png' alt='Imagem de uma pessoa' position='Desenvolvedor' />
        <Collaborator name='Lucas' image='https://portfoliogarcia-beta.vercel.app/assets/img/perfil.png' alt='Imagem de uma pessoa' position='Desenvolvedor' />
        <Collaborator name='Lucas' image='https://portfoliogarcia-beta.vercel.app/assets/img/perfil.png' alt='Imagem de uma pessoa' position='Desenvolvedor' />
      </div>

    </section>
  );
};

export default Time;