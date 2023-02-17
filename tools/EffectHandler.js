const jimp = require("jimp");
const effects = require("./Effects");
const fs = require("fs");

/**
 * @param {string | Buffer | (string | Buffer)[]} i
 * @param {string} template
 */
async function effectHandler(i, template, savefile) {
  const f = fs.readFileSync(template).toString();
  let image = await jimp.read(i);
  if (/<!--\s([A-Za-z0-9]+.*[^)])/g.test(f)) {
    f.match(/<!--\s([A-Za-z0-9]+.*[^)])/g).forEach((e) => {
      e = e.split(" ")[1].toLowerCase();
      if (/\(([^)]+)\)/.test(e)) {
        const number = e.match(/\(([^)]+)\)/)[1];
        e = e.replace(/ *\([^)]*\) */g, "");
        try {
          image = effects[e](image, number);
        } catch (e) {
          console.error("Invalid effect name");
        }
      } else {
        try {
          image = effects[e](image);
        } catch {
          console.error("Invalid effect name");
        }
      }
    });
    image.write(savefile);
  }
}

module.exports = { effectHandler };
