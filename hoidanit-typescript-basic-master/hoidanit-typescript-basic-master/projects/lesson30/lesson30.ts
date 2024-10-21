// default parameter

const summm = (a: number, b: number, c: number = 0) => {
  return a + b + c;
};

console.log(summm(1, 2));
console.log(summm(1, 2, 3));