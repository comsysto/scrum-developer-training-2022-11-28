/**
 * operation is one of "+", "-", "/", "*"
 *
 * result is simply the mathematical result of the operation
 * palindrome should be true if the result is a palindrome (e.g. 12321) and false otherwise
 */

function checkPalindrome(string) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function calculate(operation, a, b) {
  let result;
  if (operation === "+") {
    result = a + b;
  } else if (operation === "-") {
    result = a - b;
  } else if (operation === "/") {
    if (b === 0) {
      result = undefined;
    } else {
      result = a / b;
    }
  } else if (operation === "*") {
    result = a * b;
  }
  return {
    result: result,
    palindrome: result ? checkPalindrome(result.toString()) : false,
  };
}

export default calculate;
