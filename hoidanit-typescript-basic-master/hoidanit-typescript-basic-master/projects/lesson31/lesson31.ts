// function getTotal(...numbers: number[]): number {
//   let total = 0;
//   numbers.forEach((num) => {
//     total += num;
//   });
//   return total;
// }

// console.log(getTotal(1, 2, 3, 4, 5));
// console.log(getTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function multiply(n: number, ...m: number[]){ 
    return m.map((x)=>n*x); 
}
    // 'a' getsvalue[10,20,30,40] 
const a = multiply(10,1,2,3,4); 

console.log(a);
    