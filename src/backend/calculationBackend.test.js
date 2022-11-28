import calculate from "./calculationBackend";

test("add 1 and 2 correctly and to not return a palindrome", () => {
  const result = calculate("+", 10, 2);
  expect(result.result).toEqual(12);
  console.log(result.palindrome);
  expect(result.palindrome).toBe(false);
});

test("add 12321 and 0 correctly and return a palindrome", () => {
  const result = calculate("+", 12321, 0);
  expect(result.result).toEqual(12321);
  expect(result.palindrome).toBe(true);
});

test("divide 12321 through 0 and throw an error", () => {
  const result = calculate("/", 12321, 0);
  expect(result.result).toBe(undefined);
});

test("substract 12321 and 1 correctly and return not a palindrome", () => {
  const result = calculate("-", 12321, 1);
  expect(result.result).toEqual(12320);
  expect(result.palindrome).toBe(false);
});

test("multiply 5 and 2 correctly and return not a palindrome", () => {
  const result = calculate("*", 5, 2);
  expect(result.result).toEqual(10);
  expect(result.palindrome).toBe(false);
});

test("divide 10 and 2 and return a palindrome", () => {
  const result = calculate("/", 10, 2);
  expect(result.result).toEqual(5);
  expect(result.palindrome).toBe(true);
});

test("add -5 to 0 and return not a palindrome", () => {
  const result = calculate("+", -5, 0);
  expect(result.result).toEqual(-5);
  expect(result.palindrome).toBe(false);
});
