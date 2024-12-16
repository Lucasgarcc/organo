import './Footer.css';
import logoImg from '../../assets/imagens/logo.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>

    <section className='logo'>
            <img src={logoImg} alt="" />
    </section>
    
      <section className='footer-social'>
        <ul>
          <li>
            <a href="facebook.com" target='_blank'>
            <FaFacebookSquare style={{color:'fff', fontSize: 30 }} />
            </a>
        </li>
        <li>
            <a href="linkdin.com" target='_blank'>
            <FaLinkedin  style={{color:'fff', fontSize: 30 }} />
            </a>
        </li>
        <li>
            <a href="facebook.com" target='_blank'>
             <FaGithubSquare style={{color:'fff', fontSize: 30 }}/>
            </a>
        </li>
      </ul>
    </section>

    <section className='copyright'>
            <p>
              Desenvolvido por Lucas Garcia.
            </p>
    </section>
    </footer>
 
  )
}

export default Footer;