import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form/Form';

function App() {
  const [collaborator, setCollaborator] = React.useState([]);

  const addNewCollaborator = (collaboratorData) => {
    setCollaborator((prevCollaborators) => [...prevCollaborators, collaboratorData]);
    console.log('Novo colaborador registrado:', collaboratorData);
  };
  

  return (
    <div className="App">
      <Banner />
      <Form registerCollaborator={addNewCollaborator} />
    </div>
  );
}

export default App;
