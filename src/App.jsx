import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form/Form';
import Time from './components/Time/Time';
import Footer from './components/Footer/Footer';
import { func } from 'prop-types';

function App() {

  const [times, setTimes] = React.useState([ 
    {
      name: 'Programação',
      color: '#d9f7e9',
    },
    {
      name: 'Front-End',
      color: '#ebfbff',
    },
    {
      name: 'Data Science',
      color: '#f0f8e2',
    },
    {
      name: 'DevOps',
      color: '#fde7e8',
    },
    {
      name: 'UX & UI Design',
      color: '#fae5f5',
    },
    {
      name: 'Mobile',
      color: '#fff5d9',
    },
    {
      name: 'Inovação e Gestão',
      color: '#ffeedf',
    },
  ])


  const handleColorTime = (color, name) => {
    setTimes(
      times.map(time => {
        if(time.name === name) {
          time.color = color;
        }
        return time;
      })
    )
  }


  const [collaborator, setCollaborator] = React.useState([]);

  const addNewCollaborator = (collaboratorData) => {
    setCollaborator([...collaborator, collaboratorData]);
    console.log('Novo colaborador registrado:', collaboratorData);
  };

  const deleteCollaborator = ()  => {
    console.log('delete colaborador');
  }

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

      <h2 className='title'>Minha Organização</h2>
      {times.map((time) => (
        
        <Time
          key={time.name}
          time={time}
          collaborator={collaborator}
          deleteCollaborator={deleteCollaborator}
          changeColorTime={handleColorTime}
        />
      ))}

       <Footer />
    </div>
  );
}

export default App;
