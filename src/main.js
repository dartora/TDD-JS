const sum = (value1, value2) => value1 + value2;
const sub = (value1, value2) => value1 - value2;
const div = (dividendo, divisor) => (divisor === 0 ? 'impossible' : dividendo / divisor);
const mult = (value1, value2) => value1 * value2;

export {
  sum,
  sub,
  div,
  mult,
};
