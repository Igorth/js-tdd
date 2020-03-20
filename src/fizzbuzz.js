const FizzBuzz = (num) => {
  if (num % 3 === 0) {
    return 'Fizz';
  }

  if (num % 5 === 0) {
    return 'Buzz';
  }
};

export default FizzBuzz;
