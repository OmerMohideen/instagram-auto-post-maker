const { PostMaker } = require("./PostMaker");

function create(options) {
  const post = new PostMaker(
    options.max_quote_words ?? 50,
    options.min_quote_words ?? 1,
    options.quote_generator_api,
    options.api_quote_key,
    options.api_series_key ?? "",
    options.api_character_key,
    options.template_file,
    options.extra_google_search_keywords ?? "",
    options.custom_search ?? false,
    options.custom_search_keywords ?? ""
  );
  post.run();
}

module.exports.create = create;
