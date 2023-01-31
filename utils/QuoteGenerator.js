const axios = require("axios");
const { quote_generator_api } = require("../config.json");

async function getQuote() {
  const quote = await axios(quote_generator_api)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
  return quote;
}

module.exports = { getQuote };
