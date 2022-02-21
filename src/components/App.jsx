import React from "react";
import Card from "./card/Card";

var Contacto = {
  ImgAvatar: "https://picsum.photos/200",
  Nombre: "Noemi Ponce",
  Puesto: "Ing. Sistemas Computacionales",
  Movil: "956-635-4833",
  Telefono: "956-795-1280",
  Email: "nponce@syntranet.net",
  Trabajo: "Syntranet Trade Network, Inc.",
  PaginaWeb: "www.syntranet.net",
  Facebook: "https://www.Facebook.com",
  Instagram: "https://www.Instagram.com",
};

function App() {
  return <Card Contacto={Contacto} />;
}
export default App;
