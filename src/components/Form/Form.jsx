import React from 'react';
import Button from '../Button/Button'
import SuspenseList from '../SuspenseList/SuspenseList';
import Input from './input';
import './Form.css';

const times = [
  'Programação', 
  'Front-End', 
  'Data Science', 
  'DevOps',
  'UX & UI Design',
  'Mobile',
  'Inovação e Gestão',
]


const Form = ({ registerCollaborator }) => {

  const [name, setName] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [image, setImage] = React.useState('');
  const [time, setTime] = React.useState('');
  const [showErrors, setShowErrors] = React.useState(false);

  const salveClick = (event) => {
    event.preventDefault();
    const isValid = name && position; // Verifica se nome E posição estão preenchidos
    
    if (isValid) {
      registerCollaborator({ name, position, image, time });

      alert(`Form enviado!\nNome: ${name}\nCargo: ${position}\nImagem: ${image}`);

      setName('');
      setPosition('');
      setImage('');
      setTime('');

    } else {
      setShowErrors(true); 
      // Define showErrors como true se houver algum erro
      // Aqui você poderia adicionar lógica para exibir mensagens de erro mais específicas para cada campo
    }

  };


  return (
    <section className="form">
      <form onSubmit={salveClick}>
        <h2>Preencha os dados para criar o card do Colaborador</h2>
        <Input
          htmlFor="nome"
          name="nome"
          type="text"
          value={name}
          setValue={setName}
          showError={showErrors}
          label="Nome"
          placeholder="Digite seu nome"
          requiredMessage="Por favor, preencha o campo Nome "
        />

        <Input
          htmlFor="cargo"
          name="cargo"
          type="text"
          value={position}
          setValue={setPosition}
          showError={showErrors}
          label="Cargo"
          placeholder="Digite seu cargo"
          requiredMessage="Por favor, preencha o campo Cargo "
        />

        <Input
          htmlFor="imagem"
          name="imagem"
          type="url"
          label="Imagem"
          value={image}
          setValue={setImage}
          placeholder="Digite uma URL de imagem"
        />
        <SuspenseList label="Times" options={times} value={time} setValue={setTime} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;