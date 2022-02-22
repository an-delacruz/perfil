import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import fetchDataCard from "./App.js";

// var Contacto = {
//   ImgAvatar: "https://picsum.photos/200",
//   Nombre: "Noemi Ponce",
//   Puesto: "Ing. Sistemas Computacionales",
//   Movil: "956-635-4833",
//   Telefono: "956-795-1280",
//   Email: "nponce@syntranet.net",
//   Trabajo: "Syntranet Trade Network, Inc.",
//   PaginaWeb: "www.syntranet.net",
//   Facebook: "https://www.Facebook.com",
//   Instagram: "https://www.Instagram.com",
// };
var id = "6211d241307fc3e38dc3657c";
function App() {
  const [card, setCard] = useState({});
  // useEffect(() => {
  //   fetchDataCard(id).then((data) => setCard(data));
  // });
  fetchDataCard(id).then((val) => setCard(val));
  console.log(card);
  return <Card Contacto={card} />;
}
export default App;
