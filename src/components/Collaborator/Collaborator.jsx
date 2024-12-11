import React from "react";
import './Collaborator.css'

const Collaborator = ({ name, image, alt, position}) => {

  return (
    <div className="collaborator">
      <div className="header">
        <figure>
          <img src={image} alt={alt} />
        </figure>
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );

};

export default Collaborator;