import React from "react";
import "./card.css";
import Avatar from "./Avatar";
import IconFacebook from "../../images/IconFacebook.png";
import IconInstagram from "../../images/IconInstagram.png";

function Card() {
  return (
    <div className="mainContainer">
      <div className="profileContainer">
        <Avatar />
        <div className="nameContainer">
          <h3>Noemi Ponce</h3>
          <div className="position">Ing. Sistemas Computacionales</div>
        </div>
        <div className="optionsContainer">
          <div className="btnLlamarContainer">
            <button className="btnLlamar">
              <i className="material-icons">phone</i>
              <label>LLAMAR</label>
            </button>
          </div>
          <div className="btnEmailContainer">
            <button className="btnEmail">
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
              <label>956-6354833</label>
              <span>Móvil</span>
            </div>
            <div className="telefono">
              <label>956-795-1280</label>
              <span>Teléfono</span>
            </div>
          </div>
        </div>
        <div className="emailContainer">
          <i className="icono-datos material-icons">mail</i>
          <div className="email">
            <label>nponce@syntranet.net</label>
            <span>Email</span>
          </div>
        </div>
        <div className="workContainer">
          <div className="workplaceContainer">
            <i className="icono-datos material-icons">work</i>
            <div className="workplace">
              <label>Synergy Trade Network, Inc.</label>
              <span>Ing. Sistemas Computacionales</span>
            </div>
          </div>
          <div className="websiteContainer">
            <i className="icono-datos material-icons">language</i>
            <div className="website">
              <label>www.syntranet.net</label>
              <span>Página web</span>
            </div>
          </div>
        </div>
        <div className="redesContainer">
          <h3>Redes Sociales</h3>
          <div className="iconosRedes">
            <img href="" src={IconFacebook} alt="Facebook" />
            <img href="" src={IconInstagram} alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
