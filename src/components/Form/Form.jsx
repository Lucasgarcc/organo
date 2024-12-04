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

const Form = () => {
  return (
    <section className='form'>
      <form>
        <h2>Preencha os dados para criar o card do Colaborador</h2>
        <Input htmlFor="nome" name='nome' type='text' label='Nome: ' placeholder='Digite seu nome' />
        <Input htmlFor="cargo" name='cargo' type='text' label='Cargo: ' placeholder='Digite seu cargo' />
        <Input htmlFor="imagem" name='imagem' type='url' label='Imagem: ' placeholder='Digite uma url de imagem' />
        <SuspenseList label="Times" options={times} />

      </form>
    </section>
  );
}

export default Form;