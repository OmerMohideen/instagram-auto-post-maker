const nodeHtmlToImage = require("node-html-to-image");
const { getGradient } = require("./GradientGenerator");
const fs = require("fs");
const { effectHandler } = require("./EffectHandler");

/**
 * @param {string|null} quote
 * @param {string|null} character
 * @param {string|null} series
 * @param {string|null} img
 * @param {string} template
 */
async function drawImage(quote, character, series, img, template) {
  const color = getGradient();
  const savefile = `./images/${fs.readdirSync("./images/").length + 1}.jpg`;
  if (!fs.existsSync("./images")) {
    fs.mkdirSync("./images");
  }
  nodeHtmlToImage({
    output: savefile,
    html: fs.readFileSync(template).toString(),
    content: {
      quote: quote,
      author: character,
      series: series,
      img: img,
      bg: color,
    },
  }).then(async (i) => {
    await effectHandler(i, template, savefile);
    console.log("Saving image...");
  });
}

module.exports = { drawImage };
