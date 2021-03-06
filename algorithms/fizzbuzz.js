/**
 * ? print "Fizz" if divisible by 3
 * ? print "Buzz" if divisible by 5
 * ? print "FizzBuzz" if divisible by 3 and 5
 * ? otherwise print number
 */

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz(20);
