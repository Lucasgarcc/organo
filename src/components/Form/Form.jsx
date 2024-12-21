import React from 'react';
import Button from '../Button/Button'
import SuspenseList from '../SuspenseList/SuspenseList';
import Input from './Input/Input';
import './Form.css';

const Form = ({ registerCollaborator, teams, registerTeam }) => {

  const [name, setName] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [image, setImage] = React.useState('');
  const [team, setTeam] = React.useState('');
  const [addTeam, setAddTeam] = React.useState('');
  const [addColorTeam, setAddColorTeam] = React.useState('');
  const [showErrors, setShowErrors] = React.useState(false);

  const salveClick = (event) => {
    event.preventDefault()
    const isValid = name && position && team;
    // Verifica se nome E posição estão preenchidos
    
    if (isValid) {
      registerCollaborator({ name, position, image, team, addTeam});
      setName('');
      setPosition('');
      setImage('');
      setTeam('');
    } else {
      setShowErrors(true); 
      // Define showErrors como true se houver algum erro
      // Aqui você poderia adicionar lógica para exibir mensagens de erro mais específicas para cada campo
    }

  };


  const salveTeam = (event) => {
    event.preventDefault();

    if (addTeam && addColorTeam) {
      registerTeam({ 
        name: addTeam, 
        color: addColorTeam,
      })

      //Resetando os campos após adicionar o time
      setShowErrors(false);
      setAddTeam('');
      setAddColorTeam('');

    } else {
      setShowErrors(true);
    }
  }

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
        <SuspenseList label="Times" options={teams} value={team} setValue={setTeam} />
        <Button>Criar Card</Button>
      </form>

      <form onSubmit={salveTeam}>
        <h2>Preencha os dados para criar um novo Time</h2>
        <Input
          htmlFor="team"
          name="team"
          type="text"
          value={addTeam}
          setValue={setAddTeam}
          showError={showErrors}
          label="Time"
          placeholder="Digite seu nome"
          requiredMessage="Por favor, preencha o campo nome do Time "
        />

        <Input
          htmlFor="color"
          name="color"
          type="color"
          value={addColorTeam}
          setValue={setAddColorTeam}
          showError={showErrors}
          label="Color"
          placeholder="Digite a cor do time"
          requiredMessage="Por favor, adicione a Cor do Time "
        />
        <Button>Adicionar </Button>
      </form>
    </section>
  );
};

export default Form;