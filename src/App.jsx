import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import fetchDataCard from "./App.js";

function App() {
  var id = "6211d241307fc3e38dc3657c";
  const [card, setCard] = useState();
  useEffect(() => {
    if (id) {
      fetchDataCard(id).then((val) => setCard(val));
    }
  }, [id]);
  if (card == undefined) {
    return <div></div>;
  }
  return <Card Contacto={card} />;
}
export default App;
