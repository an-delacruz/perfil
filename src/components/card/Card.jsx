import React from "react";
import "./card.css";
import Avatar from "../avatar/Avatar";
import IconFacebook from "../../images/IconFacebook.png";
import IconInstagram from "../../images/IconInstagram.png";

function Card(props) {
  var Contacto = props.Contacto;
  return (
    <div className="mainContainer">
      <div className="profileContainer">
        <Avatar ImgAvatar={Contacto.ImgAvatar} />
        <div className="nameContainer">
          <h3>{Contacto.Nombre}</h3>
          <div className="position">{Contacto.Puesto}</div>
        </div>
        <div className="optionsContainer">
          <div className="btnLlamarContainer">
            <button
              className="btnLlamar"
              onClick={() => window.open("tel:" + Contacto.Movil)}
            >
              <i className="material-icons">phone</i>
              <label>LLAMAR</label>
            </button>
          </div>
          <div className="btnEmailContainer">
            <button
              className="btnEmail"
              onClick={() => window.open("mailto:" + Contacto.Email)}
            >
              <i className="material-icons">send</i>
              <label>EMAIL</label>
            </button>
          </div>
        </div>
      </div>
      <div className="dataContainer">
        <div className="telephoneContainer">
          <i className="icono-datos material-icons">phone</i>
          <div className="telDataContainer">
            <div className="movil">
              <label>{Contacto.Movil}</label>
              <span>Móvil</span>
            </div>
            <div className="telefono">
              <label>{Contacto.Telefono}</label>
              <span>Teléfono</span>
            </div>
          </div>
        </div>
        <div className="emailContainer">
          <i className="icono-datos material-icons">mail</i>
          <div className="email">
            <label>{Contacto.Email}</label>
            <span>Email</span>
          </div>
        </div>
        <div className="workContainer">
          <div className="workplaceContainer">
            <i className="icono-datos material-icons">work</i>
            <div className="workplace">
              <label>{Contacto.Trabajo}</label>
              <span>{Contacto.Puesto}</span>
            </div>
          </div>
          <div className="websiteContainer">
            <i className="icono-datos material-icons">language</i>
            <div className="website">
              <label>{Contacto.PaginaWeb}</label>
              <span>Página web</span>
            </div>
          </div>
        </div>
        <div className="redesContainer">
          <h3>Redes Sociales</h3>
          <div className="iconosRedes">
            <a href={Contacto.Facebook}>
              <img href={Contacto.Facebook} src={IconFacebook} alt="Facebook" />
            </a>
            <a href={Contacto.Instagram}>
              <img src={IconInstagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
