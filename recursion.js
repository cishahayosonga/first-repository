// Factorial with the loop

let num = 2;

let answer = 1;
for (let i = num; i >= 0; i--) {
  if (i === 1 || i === 0) {
    answer *= 1;
    break;
  } else {
    answer *= i * (i - 1);
    i--;
  }
}

// Factorial with recursion

console.log(answer);

function factorial(a) {
  if (a === 1 || a === 0) return 1;
  return a * factorial(a - 1);
}

console.log(factorial(num))

a = 5

120
24
6
2
