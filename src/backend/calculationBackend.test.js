import calculate from "./calculationBackend";

test('add 1 and 2 correctly', () => {
    const result = calculate("+", 1, 2);
    expect(result.result).toEqual(3);
})

test('minus 1 and 2 correctly', () => {
    const result = calculate("-", 1, 2);
    expect(result.result).toEqual(-1);
})

test('multiply 1 and 2 correctly', () => {
    const result = calculate("*", 1, 2);
    expect(result.result).toEqual(2);
})

test('divide 1 and 2 correctly', () => {
    const result = calculate("/", 1, 2);
    expect(result.result).toEqual(0.5);
})

test('one is not a number, fail', () => {
    const result = calculate("/", "foo", 2);
    expect(result.result).toEqual("Not a Number");
})

test('string is number', () => {
    const result = calculate("+", "2", 2);
    expect(result.result).toEqual(4);
})

test('operation not implemented', () => {
    const result = calculate("#", "2", 2);
    expect(result.result).toEqual("Not implemented");
})
