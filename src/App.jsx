import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form/Form';
import Time from './components/Time/Time';
import Footer from './components/Footer/Footer';
import {v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = React.useState([ 
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#d9f7e9',
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#ebfbff',
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#f0f8e2',
    },
    {
      id: uuidv4(),
      name: 'DevOps',
      color: '#fde7e8',
    },
    {
      id: uuidv4(),
      name: 'UX & UI Design',
      color: '#fae5f5',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#fff5d9',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#ffeedf',
    },
  ])


  const handleColorTeam = (color, id) => {
    setTeams(
      teams.map(team => {
        if(team.id === id) {
          team.color = color;
        }
        return team;
      })
    )
  }


  const [collaborator, setCollaborator] = React.useState([]);

  const addNewCollaborator = (collaboratorData) => {
    setCollaborator([...collaborator, collaboratorData]);
    console.log('Novo colaborador registrado:', collaboratorData);
  };

  const deleteCollaborator = (id)  => {
    setCollaborator(collaborator.filter(collaborator => collaborator.id !== id))
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map((item) => item.name)} registerCollaborator={addNewCollaborator} />
      {teams.map(team => <Time 
        key={team.name} 
        title={team.name} 
      />)}

      <h2 className='title'>Minha Organização</h2>

      {teams.map((team) => (
        
        <Time
          key={team.name}
          team={team}
          collaborator={collaborator}
          deleteCollaborator={deleteCollaborator}
          changeColorTeam={handleColorTeam}
        />
      ))}

       <Footer />
    </div>
  );
}

export default App;