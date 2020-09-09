/* eslint-disable no-undef */
import calculator, { add } from './calculator';

test('Divide two similar natural numbers', () => {
  expect(calculator).toBeDefined();
});

test('Add two positive numbers', () => {
  expect(add(2, 4)).toBe(6);
});

test('Add two negative numbers', () => {
  expect(add(-2, -4)).toBe(-6);
});

test('Add one greater positive', () => {
  expect(add(-2, 4)).toBe(2);
});

test('Add one greater negative', () => {
  expect(add(2, -4)).toBe(-2);
});

test('Add one positive with zero', () => {
  expect(add(0, 4)).toBe(4);
});

test('Add one negative with zero', () => {
  expect(add(0, -4)).toBe(-4);
});

test('Add two zeros', () => {
  expect(add(0, -4)).toBe(-4);
});
