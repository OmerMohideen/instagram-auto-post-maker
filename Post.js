const { getCharacterImage } = require("./utils/CharacterImageGenerator");
const { getQuote } = require("./utils/QuoteGenerator");
const { draw } = require("./utils/DrawImage");

class Post {
  async run() {
    let quote = await getQuote();
    while (countWords(quote.quote) > 50) {
      quote = await getQuote();
      if (countWords(quote.quote) < 50) {
        break;
      }
    }
    const imageUrl = await getCharacterImage(quote.character, quote.anime);
    await draw(quote, imageUrl.original);
  }
}

function countWords(s) {
  s = s.replace(/(^\s*)|(\s*$)/gi, "");
  s = s.replace(/[ ]{2,}/gi, " ");
  s = s.replace(/\n /, "\n");
  return s.split(" ").length;
}

module.exports = { Post };
