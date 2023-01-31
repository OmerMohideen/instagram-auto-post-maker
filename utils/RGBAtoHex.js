function rgba2hex(r, g, b, a) {
  if (r > 255 || g > 255 || b > 255 || a > 255) throw "Invalid color component";
  return (
    (256 + r).toString(16).substr(1) +
    (((1 << 24) + (g << 16)) | (b << 8) | a).toString(16).substr(1)
  );
}

module.exports = { rgba2hex };
