import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import fetchDataCard from "./App.js";
import { Loading } from "./components/loading/loading";
function App() {
  const url = document.URL;
  const id = url.substring(url.lastIndexOf("/") + 1);
  // const { id } = useParams();
  // var id = "edParra";
  console.log(id);
  const [card, setCard] = useState();
  useEffect(() => {
    if (id) {
      fetchDataCard(id).then((val) => setCard(val));
    }
  }, [id]);

  return card ? <Card Contacto={card} /> : <Loading />;
}
export default App;
