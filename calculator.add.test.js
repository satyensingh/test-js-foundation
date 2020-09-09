/* eslint-disable no-undef */
const calculator = require('./calculator');

test('Divide two similar natural numbers', () => {
  expect(calculator).toBeDefined();
});

test('Add two positive numbers', () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test('Add two negative numbers', () => {
  expect(calculator.add(-2, -4)).toBe(-6);
});

test('Add one greater positive', () => {
  expect(calculator.add(-2, 4)).toBe(2);
});

test('Add one greater negative', () => {
  expect(calculator.add(2, -4)).toBe(-2);
});

test('Add one positive with zero', () => {
  expect(calculator.add(0, 4)).toBe(4);
});

test('Add one negative with zero', () => {
  expect(calculator.add(0, -4)).toBe(-4);
});

test('Add two zeros', () => {
  expect(calculator.add(0, -4)).toBe(-4);
});
