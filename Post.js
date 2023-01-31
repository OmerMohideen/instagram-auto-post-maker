const { getCharacterImage } = require("./utils/CharacterImageGenerator");
const { getQuote } = require("./utils/QuoteGenerator");
const { draw } = require("./utils/DrawImage");

class Post {
  async run() {
    const quote = await getQuote();
    const imageUrl = await getCharacterImage(quote.character);
    await draw(quote, imageUrl.original);
  }
}

module.exports = { Post };
