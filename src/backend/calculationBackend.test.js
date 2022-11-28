import calculate from "./calculationBackend";

const inputObject = [
  {
    operation: "+",
    a: 42,
    b: 11,
    result: 42 + 11,
  },
  {
    operation: "-",
    a: 42,
    b: 11,
    result: 42 - 11,
  },
  {
    operation: "/",
    a: 42,
    b: 11,
    result: 42 / 11,
  },
  {
    operation: "*",
    a: 42,
    b: 11,
    result: 42 * 11,
  },
];

inputObject.forEach(({ operation, a, b, result }) => {
  test(`${operation} ${a} and ${b} correctly`, () => {
    const testResult = calculate(operation, a, b);
    expect(testResult.result).toEqual(result);
  });
});
