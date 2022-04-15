import calculate from "./calculationBackend";

test('add 1 and 2 correctly', () => {
    const result = calculate("+", 1, 2);
    expect(result.result).toEqual(3);
})
