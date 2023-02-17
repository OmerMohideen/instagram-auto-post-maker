function dither565(image) {
  return image.dither565();
}

function greyscale(image) {
  return image.greyscale();
}

function invert(image) {
  return image.invert();
}

function normalize(image) {
  return image.normalize();
}

function sepia(image) {
  return image.sepia();
}

function opaque(image) {
  return image.opaque();
}

function blur(image, number) {
  return image.blur(Number(number));
}

function gaussian(image, number) {
  return image.gaussian(Number(number));
}

function posterize(image, number) {
  return image.posterize(Number(number));
}

function pixelate(image, number) {
  return image.pixelate(Number(number));
}

function brightness(image, number) {
  return image.brightness(Number(number));
}

function contrast(image, number) {
  return image.contrast(Number(number));
}

module.exports = {
  dither565: dither565,
  greyscale: greyscale,
  invert: invert,
  normalize: normalize,
  sepia: sepia,
  opaque: opaque,
  blur: blur,
  gaussian: gaussian,
  posterize: posterize,
  pixelate: pixelate,
  brightness: brightness,
  contrast: contrast,
};
