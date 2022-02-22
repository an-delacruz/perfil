import React from "react";
import "./card.css";
import Avatar from "../avatar/Avatar";
import IconFacebook from "../../images/IconFacebook.png";
import IconInstagram from "../../images/IconInstagram.png";
import IconWhatsApp from "../../images/IconWhatsApp.png";
import IconLinkedIn from "../../images/IconLinkedIn.png";
import IconYouTube from "../../images/IconYouTube.png";
import IconTwitter from "../../images/IconTwitter.png";
function Card(props) {
  var Contacto = props.Contacto;
  var { redesSociales } = props.Contacto;
  console.log(props.Contacto);
  redesSociales.facebook = "https://facebook.com";
  redesSociales.instagram = "https://instagram.com";
  redesSociales.twitter = "https://twitter.com";
  // redesSociales.whatsApp = "https://whatsapp.com";
  redesSociales.linkedIn = "https://linkedin.com";
  // redesSociales.youTube = "https://youtube.com";
  return (
    <div className="mainContainer">
      <div className="profileContainer">
        <Avatar ImgAvatar={"https://picsum.photos/200"} />
        <div className="nameContainer">
          <h3>{Contacto.name}</h3>
          <div className="position">{Contacto.titulo}</div>
        </div>
        <div className="optionsContainer">
          <div className="btnLlamarContainer">
            <button
              className="btnLlamar"
              onClick={() => window.open("tel:" + Contacto.movil)}
            >
              <i className="material-icons">phone</i>
              <label>LLAMAR</label>
            </button>
          </div>
          <div className="btnEmailContainer">
            <button
              className="btnEmail"
              onClick={() => window.open("mailto:" + Contacto.email)}
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
              <label>{Contacto.movil}</label>
              <span>Móvil</span>
            </div>
            <div className="telefono">
              <label>{Contacto.telefono}</label>
              <span>Teléfono</span>
            </div>
          </div>
        </div>
        <div className="emailContainer">
          <i className="icono-datos material-icons">mail</i>
          <div className="email">
            <label>{Contacto.email}</label>
            <span>Email</span>
          </div>
        </div>
        <div className="workContainer">
          <div className="workplaceContainer">
            <i className="icono-datos material-icons">work</i>
            <div className="workplace">
              <label>{Contacto.companyName}</label>
              <span>{Contacto.departamento}</span>
            </div>
          </div>
          <div className="websiteContainer">
            <i className="icono-datos material-icons">language</i>
            <div className="website">
              <label>{Contacto.webPage}</label>
              <span>Página web</span>
            </div>
          </div>
        </div>
        <div className="redesContainer">
          <h3>Redes Sociales</h3>
          <div className="iconosRedes">
            {redesSociales.facebook ? (
              <a href={redesSociales.facebook} target="_blank" rel="noreferrer">
                <img src={IconFacebook} alt="Facebook" />
              </a>
            ) : (
              ""
            )}

            {redesSociales.instagram ? (
              <a
                href={redesSociales.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <img src={IconInstagram} alt="Instagram" />
              </a>
            ) : (
              ""
            )}
            {redesSociales.linkedIn ? (
              <a href={redesSociales.linkedIn} target="_blank" rel="noreferrer">
                <img src={IconLinkedIn} alt="LinkedIn" />
              </a>
            ) : (
              ""
            )}
            {redesSociales.twitter ? (
              <a href={redesSociales.twitter} target="_blank" rel="noreferrer">
                <img src={IconTwitter} alt="Twitter" />
              </a>
            ) : (
              ""
            )}

            {redesSociales.whatsApp ? (
              <a href={redesSociales.whatsApp} target="_blank" rel="noreferrer">
                <img src={IconWhatsApp} alt="WhatsApp" />
              </a>
            ) : (
              ""
            )}
            {redesSociales.youTube ? (
              <a href={redesSociales.youTube} target="_blank" rel="noreferrer">
                <img src={IconYouTube} alt="YouTube" />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="actionsContainer">
        <button
          type="button"
          onClick={() => shareContact()}
          className="btnShare material-icons"
        >
          share
        </button>
        <button
          type="button"
          onClick={() => addContact(Contacto.urlvcf)}
          className="btnAdd material-icons"
        >
          person_add
        </button>
      </div>
    </div>
  );
}

function shareContact() {}
function addContact(urlvcf) {
  window.open(`https://drive.google.com/uc?export=download&id=${urlvcf}`);
}

export default Card;
