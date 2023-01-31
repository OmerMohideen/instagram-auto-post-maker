const jimp = require("jimp");

async function getBackgroundImage(imgUrl) {
  const image = await jimp.read(imgUrl);
  return jimp.intToRGBA(image.getPixelColor(0, 0));
}

module.exports = { getBackgroundImage };
