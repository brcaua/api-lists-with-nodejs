const axios = require("axios");
const URL = `https://swapi.dev/api/people`;

getName = async (nome) => {
  const url = `${URL}/?search=${nome}&format=json`;
  const response = await axios.get(url);
  return response.data;
}

getName('r2')
  .then((resultado) => {
    console.log("o resultado é:", resultado);
  })
  .catch((error) => {
    console.error("Not fund, try again", error);
  });

  module.exports = {getName}