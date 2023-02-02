# instagram-auto-post-maker

Create posts with qoutes and upload to instagram automatically

# How to use

Run `npm install` to install dependencies.<br>
Now you can run `npm run test` to test the bot make sure `config.json` is filled with the required data.

# Config

```json
{
  "quote_generator_api": "https://animechan.vercel.app/api/random", // api link to get random quotes
  "api_quote_key": "quote", // quote key in api
  "api_series_key": "anime", // movie/series/tvshow/anime key in api
  "api_character_key": "character", // character/author (person who says) key in api
  "max_quote_words": 50, // maximum number of words allowed in quote (we don't want a big quote now)
  "min_quote_words": 20, // minimum number of words allowed in quote (we don't want a small quote now)
  "custom_search": false, // custom google search for image if we don't want a picture of the author as background set true if using and assign custom_search_keywords
  "custom_search_keywords": "Naruto Baka", // custom google search keywords
  "extra_google_search_keywords": "4k pfp" // extra keywords for searching a background for the author of quote
}
```

# License

[MIT License](./LICENSE) © 2023 [Omer Mohideen](https://github.com/OmerMohideen)
