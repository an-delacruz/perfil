const baseURL = "https://syntranetapp-6jvod.ondigitalocean.app/api/";

async function fetchDataCard(id) {
  return await fetch(`${baseURL}card/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.card);
      return data.card;
    })
    .catch((error) => {
      console.log(error);
    });
}
export default fetchDataCard;
