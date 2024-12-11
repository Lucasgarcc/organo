import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form/Form';
import Time from './components/Time/Time';


function App() {

  const times = [ 
    {
      name: 'Programação',
      colorPrimary: '#57c278',
      colorSegundary: '#d9f7e9',
    },
    {
      name: 'Front-End',
      colorPrimary: '#82cffa',
      colorSegundary: '#ebfbff',
    },
    {
      name: 'Data Science',
      colorPrimary: '#a6d157',
      colorSegundary: '#f0f8e2',
    },
    {
      name: 'DevOps',
      colorPrimary: '#e06b69',
      colorSegundary: '#fde7e8',
    },
    {
      name: 'UX & UI Design',
      colorPrimary: '#db6ebf',
      colorSegundary: '#fae5f5',
    },
    {
      name: 'Mobile',
      colorPrimary: '#feba05',
      colorSegundary: '#fff5d9',
    },
    {
      name: 'Inovação e Gestão',
      colorPrimary: '#ff8a29',
      colorSegundary: '#ffeedf',
    },
  ]

  const [collaborator, setCollaborator] = React.useState([]);

  const addNewCollaborator = (collaboratorData) => {
    setCollaborator([...collaborator, collaboratorData]);
    console.log('Novo colaborador registrado:', collaboratorData);
  };

  return (
    <div className="App">
      <Banner />
      <Form times={times.map((item) => item.name)} registerCollaborator={addNewCollaborator} />
      {times.map(time => <Time 
        key={time.name} 
        title={time.name} 
        colorCard={time.colorPrimary} 
        colorBackground={time.colorSegundary}
       />)}
    </div>
  );
}

export default App;
