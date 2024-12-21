import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import {v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = React.useState([ 
    {
      id: uuidv4(),
      favorite: false,
      name: 'Programação',
      color: '#d9f7e9',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Front-End',
      color: '#ebfbff',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Data Science',
      color: '#f0f8e2',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'DevOps',
      color: '#fde7e8',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'UX & UI Design',
      color: '#fae5f5',
    },
    {
      id: uuidv4(),
      favorite: false,
      name: 'Mobile',
      color: '#fff5d9',
    },
    {
      id: uuidv4(),
      favorite: false,
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
    );
  };

  const [collaborator, setCollaborator] = React.useState([]);

  const addNewCollaborator = (collaboratorData) => {
    setCollaborator([
      ...collaborator,
      { ...collaboratorData, id: uuidv4() }, // Adiciona um id único ao colaborador
    ]);
  };
  
  const deleteCollaborator = (id) => {
    console.log("Deletando colaborador com id:", id);
    setCollaborator(collaborator.filter((collab) => collab.id !== id));
    console.log("Novo estado de colaboradores:", collaborator);
  };
  

  const addNewTeam = (newTeam) => {
    setTeams([...teams, {...newTeam, id: uuidv4()} ])
  }

  
  const toggleFavorite = (id) => {
    setCollaborator(collaborator.map((collaborator) =>
        collaborator.id === id
        ? { ...collaborator, favorite: !collaborator.favorite }
        : collaborator
      )
    );
  };
  
  
  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map((item) => item.name)} 
        registerCollaborator={addNewCollaborator}
        registerTeam={addNewTeam}
      /> 
      <h2 className='title'>Minha Organização</h2>
      {teams.map(team => 
        <Team
          key={team.name} 
          team={team}
          title={team.name} 
          collaborator={collaborator}
          deleteCollaborator={deleteCollaborator}
          changeColorTeam={handleColorTeam}
          toggleFavorite={toggleFavorite}
        />
      )}

       <Footer />
    </div>
  );
}

export default App;