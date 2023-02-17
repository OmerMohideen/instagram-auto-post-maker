const { getCharacterImage } = require("./tools/CharacterImageGenerator");
const { getQuote } = require("./tools/QuoteGenerator");
const { drawImage } = require("./tools/DrawImage");
const fs = require("fs");

class PostMaker {
  constructor(
    max_quote_words,
    min_quote_words,
    quote_generator_api,
    api_quote_key,
    api_series_key,
    api_character_key,
    template_file,
    extra_google_search_keywords,
    custom_search,
    custom_search_keywords
  ) {
    this.max_quote_words = max_quote_words;
    this.min_quote_words = min_quote_words;
    this.quote_generator_api = quote_generator_api;
    this.api_quote_key = api_quote_key;
    this.api_series_key = api_series_key;
    this.api_character_key = api_character_key;
    this.template_file = template_file;
    this.extra_google_search_keywords = extra_google_search_keywords;
    this.custom_search = custom_search;
    this.custom_search_keywords = custom_search_keywords;
  }
  async run() {
    console.log("Generating Quote from api...");
    let quote = await getQuote(this.quote_generator_api);
    while (
      countWords(quote[this.api_quote_key]) >= this.max_quote_words ||
      countWords(quote[this.api_quote_key]) <= this.min_quote_words
    ) {
      console.log("Regenerating Quote from api...");
      quote = await getQuote();
      if (
        countWords(quote[this.api_quote_key]) <= this.max_quote_words &&
        countWords(quote[this.api_quote_key]) >= this.min_quote_words
      ) {
        break;
      }
    }
    let imageUrl = null;
    if (/img/g.test(fs.readFileSync(this.template_file).toString())) {
      console.log("Finding for a Image 🔎");
      const i = await getCharacterImage(
        quote[this.api_character_key],
        quote[this.api_series_key],
        this.extra_google_search_keywords,
        this.custom_search,
        this.custom_search_keywords
      );
      imageUrl = i.original;
    }
    console.log("Drawing on canvas 🎨");
    await drawImage(
      quote[this.api_quote_key],
      quote[this.api_character_key],
      quote[this.api_series_key],
      imageUrl,
      this.template_file
    );
  }
}

/**
 * @param {string} s
 */
function countWords(s) {
  s = s.replace(/(^\s*)|(\s*$)/gi, "");
  s = s.replace(/[ ]{2,}/gi, " ");
  s = s.replace(/\n /, "\n");
  return s.split(" ").length;
}

module.exports = { PostMaker };
