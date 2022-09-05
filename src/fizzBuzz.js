const FizzBuzz = (value) => {
  if (value === 0) return 0;
  if (value % 3 === 0 && value % 5 === 0) {
    return 'FizzBuzz';
  }
  if (value % 3 === 0) {
    return 'Fizz';
  }
  if (value % 5 === 0) {
    return 'Buzz';
  }
  return value;
};
function foo() {
  return 'kkkk';
}

// return status === 0    ? 'default'    : status === 1      ? 'icon-1'      : 'icon-2';
export default FizzBuzz;
