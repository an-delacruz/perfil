import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import fetchDataCard from "./App.js";
import { Loading } from "./components/loading/loading";

function App() {
  var id = "6211d241307fc3e38dc3657c";
  const [card, setCard] = useState();
  useEffect(() => {
    if (id) {
      fetchDataCard(id).then((val) => setCard(val));
    }
  }, [id]);
 
  return card ? <Card Contacto={card} /> : <Loading />;
}
export default App;
