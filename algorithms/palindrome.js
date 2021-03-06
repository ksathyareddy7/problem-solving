/**
 * check if a string is palindrome that is same when flipped.
 */

function palindrome(str) {
  const inputArr = String(str)
    .toLowerCase()
    .split("")
    .filter((letter) => letter.match(/[a-z0-9]/));
  const filteredStr = inputArr.join("");
  const flipped = inputArr.reverse().join("");
  return filteredStr === flipped;
}

console.log(palindrome("177"));
