const { getCharacterImage } = require("./utils/CharacterImageGenerator");
const { getQuote } = require("./utils/QuoteGenerator");
const { drawImage } = require("./utils/DrawImage");
const {
  max_quote_words,
  min_quote_words,
  api_quote_key,
  api_series_key,
  api_character_key,
} = require("./config.json");

class Post {
  async run() {
    console.log("Generating Quote from api...");
    let quote = await getQuote();
    while (
      countWords(quote[api_quote_key]) >= max_quote_words ||
      countWords(quote[api_quote_key]) <= min_quote_words
    ) {
      console.log("Regenerating Quote from api...");
      quote = await getQuote();
      if (
        countWords(quote[api_quote_key]) <= max_quote_words &&
        countWords(quote[api_quote_key]) >= min_quote_words
      ) {
        break;
      }
    }
    console.log("Finding for a Image 🔎");
    const imageUrl = await getCharacterImage(
      quote[api_character_key],
      quote[api_series_key]
    );
    console.log("Drawing on canvas 🎨");
    await drawImage(quote, imageUrl.original);
  }
}

function countWords(s) {
  s = s.replace(/(^\s*)|(\s*$)/gi, "");
  s = s.replace(/[ ]{2,}/gi, " ");
  s = s.replace(/\n /, "\n");
  return s.split(" ").length;
}

module.exports = { Post };
