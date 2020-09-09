let calculator = require('./calculator')

test('Divide two similar natural numbers', ()=>{
    expect(calculator.divide(4,4)).toBe(1);
});

test('Divide any number by Zero', () => {
    expect(() => calculator.divide(4, 0)).toThrow("Denominator cannot be Zero");
});