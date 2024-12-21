import React from "react";
import { MdDelete } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";
import './Collaborator.css';
import Tooltip from "../Tooltip/Index";

const Collaborator = ({
  id,
  name,
  image,
  alt,
  position, 
  colorBackgroud, 
  deleteCollaborator, 
  toggleFavorite,
  favorite }) => {

  // Atualizando o onClick para ser uma função de callback
  const handleFavoriteClick = () => {
    toggleFavorite(id);
  };

  return (
    <div className="collaborator" key={id}>
      <div className="header" style={{ backgroundColor: colorBackgroud }}>
        <figure>
          <img src={image} alt={alt} />
        </figure>
      </div>
      <div className="footer">
        <span className="favorite">
          <Tooltip
            icon={
              favorite ? (
                <FaStar color={colorBackgroud} fontSize={24} onClick={handleFavoriteClick} />
              ) : (
                <FaRegStar color={colorBackgroud} fontSize={24} onClick={handleFavoriteClick} />
              )
            }
            tooltipText={favorite ? "Favorito" : "Não Favorito"}
          />
        </span>
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
      <div className="delete">
        <Tooltip
          icon={
            <MdDelete
              className="icon-delete"
              color={colorBackgroud}
              fontSize={26}
              onClick={() => deleteCollaborator(id)} // Mova o onClick para o ícone
            />
          }
          tooltipText="Deletar Colaborador"
        />
      </div>

    </div>
  );
};

export default Collaborator;
