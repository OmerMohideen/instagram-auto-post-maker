async function drawWords(
  context,
  x,
  y,
  maxWidth,
  lineHeight,
  rectHeight,
  words
) {
  var line = "";
  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + " ";
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
  rectHeight = rectHeight + lineHeight;
}

module.exports = { drawWords };
