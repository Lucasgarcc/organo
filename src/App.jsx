import './App.css';
import Banner from './components/Banner';
import Input from './components/Form/input';

function App() {
  

  return (
    <div className='App'>
    <Banner />
    <header>
    <Input htmlFor="nome" name='nome' type='text' text='Nome: ' placeholder='Digite seu nome' >
    </Input>
    <Input htmlFor="nome" name='nome' text='Nome: ' placeholder='Digite seu nome' >
    </Input>
    <Input htmlFor="nome" name='nome' text='Nome: ' placeholder='Digite seu nome' >
    </Input>
    </header>
    
    </div>
  )
}

export default App;
