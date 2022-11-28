/**
 * operation is one of "+", "-", "/", "*"
 *
 * result is simply the mathematical result of the operation
 * palindrome should be true if the result is a palindrome (e.g. 12321) and false otherwise
 */
function calculate(operation, a, b) {
    return {
        result: calculateResult(operation, a, b),
        palindrome: false
    };
}

function calculateResult(operation, a, b) {
    a = Number(a)
    b = Number(b)
    if (typeof a != "number" || typeof b != "number" || Number.isNaN(a) || Number.isNaN(b)) {
        return "Not a Number"
    }

    switch (operation) {
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "/":
            return a/b;
        case "*":
            return a*b;
        default:
            return "Not implemented";
    }
}

export default calculate;
