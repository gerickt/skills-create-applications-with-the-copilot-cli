const { add, sub, mul, div } = require('./calculator');

describe('Calculator Module', () => {
  
  describe('add function', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add multiple numbers', () => {
      expect(add(1, 2, 3, 4, 5)).toBe(15);
    });

    test('should handle negative numbers', () => {
      expect(add(-5, 3)).toBe(-2);
    });

    test('should return 0 when called with no arguments', () => {
      expect(add()).toBe(0);
    });

    test('should add a single number', () => {
      expect(add(7)).toBe(7);
    });

    test('should handle decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    test('should add zero correctly', () => {
      expect(add(0, 5, 0)).toBe(5);
    });
  });

  describe('sub function', () => {
    test('should subtract two positive numbers', () => {
      expect(sub(5, 2)).toBe(3);
    });

    test('should subtract multiple numbers', () => {
      expect(sub(10, 2, 1)).toBe(7);
    });

    test('should handle negative results', () => {
      expect(sub(2, 5)).toBe(-3);
    });

    test('should return 0 when called with no arguments', () => {
      expect(sub()).toBe(0);
    });

    test('should handle single number', () => {
      expect(sub(7)).toBe(7);
    });

    test('should subtract negative numbers', () => {
      expect(sub(5, -2)).toBe(7);
    });

    test('should handle decimal numbers', () => {
      expect(sub(5.5, 2.5)).toBe(3);
    });
  });

  describe('mul function', () => {
    test('should multiply two positive numbers', () => {
      expect(mul(4, 3)).toBe(12);
    });

    test('should multiply multiple numbers', () => {
      expect(mul(2, 3, 4)).toBe(24);
    });

    test('should handle negative numbers', () => {
      expect(mul(-3, 4)).toBe(-12);
    });

    test('should return 0 when called with no arguments', () => {
      expect(mul()).toBe(0);
    });

    test('should handle single number', () => {
      expect(mul(5)).toBe(5);
    });

    test('should return 0 when multiplying by zero', () => {
      expect(mul(5, 0, 3)).toBe(0);
    });

    test('should multiply decimal numbers', () => {
      expect(mul(2.5, 4)).toBe(10);
    });

    test('should multiply negative numbers', () => {
      expect(mul(-2, -3)).toBe(6);
    });
  });

  describe('div function', () => {
    test('should divide two positive numbers', () => {
      expect(div(10, 2)).toBe(5);
    });

    test('should divide multiple numbers sequentially', () => {
      expect(div(100, 2, 5)).toBe(10);
    });

    test('should handle negative numbers', () => {
      expect(div(-10, 2)).toBe(-5);
    });

    test('should handle decimal results', () => {
      expect(div(5, 2)).toBe(2.5);
    });

    test('should throw error on division by zero', () => {
      expect(() => div(10, 0)).toThrow('Division by zero');
    });

    test('should throw error when dividing by zero in sequence', () => {
      expect(() => div(10, 2, 0)).toThrow('Division by zero');
    });

    test('should throw error with no arguments', () => {
      expect(() => div()).toThrow('No numbers provided for division');
    });

    test('should handle single number', () => {
      expect(div(7)).toBe(7);
    });

    test('should divide negative by negative', () => {
      expect(div(-10, -2)).toBe(5);
    });

    test('should divide with decimal divisor', () => {
      expect(div(10, 2.5)).toBe(4);
    });
  });

  describe('Edge cases', () => {
    test('should handle very large numbers in add', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });

    test('should handle very small decimal numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('should handle mixed positive and negative in mul', () => {
      expect(mul(2, -3, 4, -5)).toBe(120);
    });

    test('should produce correct result with many operations', () => {
      expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55);
    });
  });
});
