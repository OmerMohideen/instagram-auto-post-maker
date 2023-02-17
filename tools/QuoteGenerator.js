const axios = require("axios");

/**
 * @param {string} quote_generator_api
 */
async function getQuote(quote_generator_api) {
  const quote = await axios(quote_generator_api)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
  return quote;
}

module.exports = { getQuote };
