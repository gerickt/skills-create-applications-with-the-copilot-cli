#!/usr/bin/env node

/**
 * Simple Node.js CLI Calculator
 * Supported operations:
 *  - addition: add
 *  - subtraction: sub
 *  - multiplication: mul
 *  - division: div
 *
 * Usage examples:
 *  node src/calculator.js add 2 3    # 5
 *  node src/calculator.js sub 5 2    # 3
 *  node src/calculator.js mul 4 3    # 12
 *  node src/calculator.js div 10 2   # 5
 *
 * The module exports functions: add, sub, mul, div
 * Division by zero is handled with a clear error and non-zero exit code.
 */

function toNumberArray(args) {
  return args.map(arg => {
    const n = Number(arg);
    if (Number.isNaN(n)) {
      throw new Error(`Invalid number: ${arg}`);
    }
    return n;
  });
}

// addition: returns sum of numbers
function add(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}

// subtraction: subtracts subsequent numbers from the first
function sub(...nums) {
  if (nums.length === 0) return 0;
  return nums.slice(1).reduce((a, b) => a - b, nums[0]);
}

// multiplication: returns product of numbers
function mul(...nums) {
  if (nums.length === 0) return 0;
  return nums.reduce((p, n) => p * n, 1);
}

// division: divides the first number by subsequent numbers
function div(...nums) {
  if (nums.length === 0) throw new Error('No numbers provided for division');
  return nums.slice(1).reduce((a, b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }, nums[0]);
}

// CLI interface
if (require.main === module) {
  const [, , cmd, ...rest] = process.argv;
  try {
    if (!cmd) {
      console.error('No command provided. Use: add|sub|mul|div');
      process.exit(2);
    }

    // support symbolic aliases too: +, -, *, x, ×, /
    const command = (cmd || '').toLowerCase();
    let op = command;
    if (command === '+' ) op = 'add';
    if (command === '-' ) op = 'sub';
    if (command === '*' || command === 'x' || command === '×') op = 'mul';
    if (command === '/' || command === '÷') op = 'div';

    const nums = toNumberArray(rest);

    let result;
    switch (op) {
      case 'add':
        result = add(...nums);
        break;
      case 'sub':
        result = sub(...nums);
        break;
      case 'mul':
        result = mul(...nums);
        break;
      case 'div':
        result = div(...nums);
        break;
      default:
        console.error('Unknown command. Supported: add, sub, mul, div (or +, -, *, /)');
        process.exit(2);
    }

    // Print result (if it's an integer print without trailing .0)
    if (Number.isFinite(result) && Number.isInteger(result)) console.log(result);
    else console.log(result);
  } catch (err) {
    if (err.message === 'Division by zero') {
      console.error('Error: Division by zero is not allowed.');
      process.exit(1);
    }
    console.error('Error:', err.message || err);
    process.exit(2);
  }
}

module.exports = { add, sub, mul, div };
