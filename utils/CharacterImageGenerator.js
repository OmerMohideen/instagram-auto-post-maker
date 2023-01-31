const unirest = require("unirest");
const cheerio = require("cheerio");

async function getCharacterImage(character, anime) {
  const url = `https://www.google.com/search?q=${character
    .split(" ")
    .join("+")}+${anime
    .split(" ")
    .join(
      "+"
    )}+pfp&sxsrf=AJOqlzWZHt0w6gihLZl9gDkdiR_I-xwYZw:1675169752083&source=lnms&tbm=isch&sa=X&ved=2ahUKEwizrYvQ7fH8AhVaS2wGHSFvBeUQ_AUoAXoECAEQAw&biw=1920&bih=1008&dpr=1&asearch=ichunk&async=_id:rg_s,_pms:s,_fmt:pc&sourceid=chrome&ie=UTF-8`;

  const selectRandom = () => {
    const userAgents = [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
    ];
    var randomNumber = Math.floor(Math.random() * userAgents.length);
    return userAgents[randomNumber];
  };
  let user_agent = selectRandom();
  let header = {
    "User-Agent": `${user_agent}`,
  };
  return unirest
    .get(url)
    .headers(header)
    .then((response) => {
      let $ = cheerio.load(response.body);
      let images_results = [];
      $("div.rg_bx").each((i, el) => {
        let json_string = $(el).find(".rg_meta").text();
        images_results.push({
          title: $(el).find(".iKjWAf .mVDMnf").text(),
          source: $(el).find(".iKjWAf .FnqxG").text(),
          link: JSON.parse(json_string).ru,
          original: JSON.parse(json_string).ou,
          thumbnail: $(el).find(".rg_l img").attr("src")
            ? $(el).find(".rg_l img").attr("src")
            : $(el).find(".rg_l img").attr("data-src"),
        });
      });
      return images_results[Math.floor(Math.random() * 10)];
    });
}

module.exports = { getCharacterImage };
