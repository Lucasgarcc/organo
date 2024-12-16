import './Banner.css';
import bannerImg from '../../assets/imagens/banner.png';
export const Banner = () => {
  return (
    <header className= "banner">
      <figure> 
        <img  src={bannerImg} alt="" />
      </figure>
    </header>
  )
}

 