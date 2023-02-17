const gradient = require("../gradient.json");

function getGradient() {
  const color =
    gradient[Math.floor(Math.random() * (gradient.length - 0) + 0)].colors;
  const angle = Math.round(Math.random() * 360);
  let hex = "linear-gradient(" + angle + "deg, ";
  for (let i = 0; i < color.length; i++) {
    if (i === color.length - 1) {
      hex += color[i] + ")";
      break;
    }
    hex += color[i] + ", ";
  }
  return hex;
}

module.exports = { getGradient };
