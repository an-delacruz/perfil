import React from "react";
import ReactDOM from "react-dom";
import "./card.css";

function Card() {
  return (
    <div className="mainContainer">
      <div className="profileContainer">
        <div className="nameContainer">
          <div className="photoContainer">
            <img src="img_avatar2.png" alt="Avatar" />
          </div>
          <h3>Noemi Ponce</h3>
          <div className="position">Ing. Sistemas Computacionales</div>
        </div>
        <div className="optionsContainer">
          <button className="btnLlamarContainer">
            <i className="small material-icons">phone</i>
            <label>LLAMAR</label>
          </button>
          <button className="btnEmailContainer">
            <i className="small material-icons">send</i>
            <label>EMAIL</label>
          </button>
        </div>
      </div>
      <div className="dataContainer">
        <div className="telephoneContainer">
          <i className="icono-datos large material-icons">phone</i>
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
          <i className="icono-datos large material-icons">mail</i>
          <div className="email">
            <label>nponce@syntranet.net</label>
            <span>Email</span>
          </div>
        </div>
        <div className="workContainer">
          <div className="workplaceContainer">
            <i className="icono-datos large material-icons">work</i>
            <div className="workplace">
              <label>Synergy Trade Network, Inc.</label>
              <span>Ing. Sistemas Computacionales</span>
            </div>
          </div>
          <div className="websiteContainer">
            <i className="icono-datos large material-icons">language</i>
            <div className="website">
              <label>www.syntranet.net</label>
              <span>Página web</span>
            </div>
          </div>
        </div>
        <div className="redesContainer">
          <h3>Redes Sociales</h3>
          <div className="iconosRedes">
            <img
              src="../../../assets/images/icono-facebook.png"
              alt="iconFacebook"
            />
            <img
              src="../../../assets/images/icono-instagram.png"
              alt="iconInstagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
