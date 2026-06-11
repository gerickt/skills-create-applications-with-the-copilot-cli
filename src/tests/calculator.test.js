const { add, sub, mul, div, modulo, power, squareRoot } = require('../calculator');

describe('Calculator extended operations', () => {
  test('modulo: 5 % 2 === 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo with negative dividend: -5 % 2 === -1', () => {
    expect(modulo(-5, 2)).toBe(-1);
  });

  test('modulo by zero throws division by zero error', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero');
  });

  test('power: 2 ^ 3 === 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with negative exponent: 2 ^ -1 === 0.5', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('power with zero exponent: any ^ 0 === 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('squareRoot: sqrt(16) === 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot of 0 is 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('squareRoot of negative number throws', () => {
    expect(() => squareRoot(-4)).toThrow('Square root of negative number');
  });

  // sanity checks for existing ops
  test('addition and subtraction still work', () => {
    expect(add(2, 3)).toBe(5);
    expect(sub(5, 2)).toBe(3);
  });

  test('multiplication and division still work', () => {
    expect(mul(4, 3)).toBe(12);
    expect(div(10, 2)).toBe(5);
  });
});
