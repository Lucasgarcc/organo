import React from 'react';
import SuspenseList from '../SuspenseList/SuspenseList';
import Input from './input';
import './Form.css';
import Button from '../Button/Button';


const times = [
  'Programação', 
  'Front-End', 
  'Data Science', 
  'DevOps',
  'UX & UI Design',
  'Mobile',
  'Inovação e Gestão',
]


const Form = () => {
  const [name, setName] = React.useState('');
  const [position, setPosition] = React.useState('');
  const [image, setImage] = React.useState('');
  const [showErrors, setShowErrors] = React.useState(false);

  const salveClick = (event) => {
    event.preventDefault();
    if (!name || !position || !image) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);
    alert(`Form enviado!\nNome: ${name}\nCargo: ${position}\nImagem: ${image}`);
    
    // Limpar os campos após enviar
    setName(''), setPosition(''), setImage('');
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
          requiredMessage="Por favor, preencha o campo Nome"
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
          requiredMessage="Por favor, preencha o campo Cargo"
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
        <SuspenseList label="Times" options={times} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;