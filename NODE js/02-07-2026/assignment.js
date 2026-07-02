const circle = (a) => {
  return 3.14 * a * a;
};
const Rtriangle = (a, b) => {
  return 0.5 * a * b;
};
const rectangle = (a, b) => {
  return a * b;
};

module.exports = {
  circle,
  rectangle,
  Rtriangle,
};
