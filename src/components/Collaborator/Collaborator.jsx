import React from "react";
import { MdDelete } from "react-icons/md";
import './Collaborator.css'

const Collaborator = ({ id, name, image, alt, position, colorBackgroud, deleteCollaborator }) => {

  return (
    <div className="collaborator" key={id}>
      <div className="header" style={{ backgroundColor: colorBackgroud }}
      >
        <figure >
          <img src={image} alt={alt} />
        </figure>
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
      <div className="delete"  >
        <p>Deletar</p>
        <i >
          <MdDelete className="icon-delete" color={colorBackgroud} fontSize={27} marginTop={'.3rem'} onClick={deleteCollaborator} />
        </i>
      </div>
    </div>
  );

};

export default Collaborator;