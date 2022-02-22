const baseURL = "https://syntranetapp-6jvod.ondigitalocean.app/api/";
// const baseURL = "https://192.168.88.136:8080/api/";

async function fetchDataCard(id) {
  return await fetch(`${baseURL}card/${id}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data.result;
    })
    .catch((error) => {
      console.log(error);
    });
}
export default fetchDataCard;
