//fibonacci
//sol 1

const fibonacci = num => {
  const result = [0, 1];
  for (let i = 2; i <= num; i++) {
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }
  console.log(result[num]);
};
fibonacci(10);

////////////////////

// sol 2

// const fibonacci = num => {
//   if (num < 2) {
//     return num;
//   }
//   return fibonacci(num - 1) + fibonacci(num - 2);
// };
// console.log(fibonacci(10));
