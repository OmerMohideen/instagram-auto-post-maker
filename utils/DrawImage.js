const { createCanvas, loadImage } = require("canvas");
const jimp = require("jimp");
const { drawWords } = require("./DrawWord");

async function drawImage(quote, img) {
  const canvas = createCanvas(1080, 1080);
  const ctx = canvas.getContext("2d");
  const i = await loadImage(img);
  let scale = Math.max(canvas.width / i.width, canvas.height / i.height);
  let xx = canvas.width / 2 - (i.width / 2) * scale;
  let yy = canvas.height / 2 - (i.height / 2) * scale;
  ctx.drawImage(i, xx, yy, i.width * scale, i.height * scale);
  var grV = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height - 200);
  grV.addColorStop(0, "rgba(0,0,0,0)");
  grV.addColorStop(1, "#000");
  ctx.fillStyle = grV;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.font = `bold 25px Sans`;
  ctx.fillStyle = `#FFFFFF`;
  ctx.textAlign = "end";
  ctx.fillText(`${quote.character} •  `, 1050, 1050);
  ctx.textAlign = "start";
  ctx.fillText(`  • ${quote.anime}`, 20, 1050);
  ctx.font = `bold 40px Sans`;
  const words = quote.quote.split(" ");
  drawWords(ctx, 50, 850 - (words.length / 6) * 10, 1000, 40, 30, words);
  const image = await jimp.read(canvas.toBuffer());
  image.dither565();
  console.log("Saving image...");
  return image.write("image.jpg");
}

module.exports = { drawImage };
