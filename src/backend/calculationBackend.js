/**
 * operation is one of "+", "-", "/", "*"
 *
 * result is simply the mathematical result of the operation
 * palindrome should be true if the result is a palindrome (e.g. 12321) and false otherwise
 */
function calculate(operation, a, b) {
  const result = doCalculation(operation, a, b);

  const resultString = `${result}`;
  const list = resultString.split("").reverse();
  const reversed = [...list].reverse().join("");

  return {
    result: result,
    palindrome: resultString === reversed,
  };
}

function doCalculation(operation, a, b) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default:
      throw new Error("Syntax Error");
  }
}

export default calculate;
