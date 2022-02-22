import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import fetchDataCard from "./App.js";
import { Loading } from "./components/loading/loading";
function App() {
  // const url = document.URL;
  // const id = url.substring(url.lastIndexOf("/") + 1);
  // const { id } = useParams();
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  const id = params.nickname;
  // var id = "edParra";
  const [card, setCard] = useState();
  useEffect(() => {
    if (id) {
      fetchDataCard(id).then((val) => setCard(val));
    }
  }, [id]);
  return card ? <Card Contacto={card} /> : <Loading />;
}
export default App;
