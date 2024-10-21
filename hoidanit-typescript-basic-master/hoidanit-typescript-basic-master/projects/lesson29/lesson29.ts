// optional parameter

const summ = (a: number, b: number, c?: number) => {
  if (c) {
    return a + b + c;
  }
  return a + b;
};

console.log(summ(1, 2));