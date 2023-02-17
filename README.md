# instagram-auto-post-maker

Create posts with qoutes using html and css as the base template

## Installation

`npm i instagram-auto-post-maker --save`

## Usage

```js
import { create } from "instagram-auto-post-maker";

create({
  max_quote_words: 50,
  min_quote_words: 20,
  quote_generator_api: "https://programming-quotesapi.vercel.app/api/random",
  api_quote_key: "quote",
  api_series_key: "",
  api_character_key: "author",
  template_file: "./templates/example.html",
});
```

## Options

instagram-auto-post-maker requires 10 options

- max_quote_words - **_maximum amount of words quote should have_** (Defaults to 50)
- min_quote_words - **_minimum amount of words quote should have_** (Defaults to 1)
- quote_generator_api - **_api link to get random quotes_**
- api_quote_key - **_quote key in api_**
- api_series_key - **_movie/series/tvshow/anime key in api_** (Defaults to "")
- api_character_key - **_character/author (person who says) key in api_**
- template_file - **_template file path_**
- custom_search - **_custom google search for image if we don't want a picture of the author as background set true if using and assign custom_search_keywords_** (Defaults to false)
- custom_search_keywords - **_custom google search keywords_** (Defaults to "")
- extra_google_search_keywords - **_extra keywords for searching a background for the author of quote_** (Defaults to "")

## License

[MIT License](./LICENSE) © 2023 [Omer Mohideen](https://github.com/OmerMohideen)
