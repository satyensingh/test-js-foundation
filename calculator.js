function InvalidInputException(message) {
    this.message = message;
    // this.name = 'InvalidInputException';
 }

const calculator = {
    add : (num1, num2) => num1+num2,
    divide : (num, den) => {
        if(den === 0 )
            throw "Denominator cannot be Zero";
        return num/den;
    }
}

module.exports = calculator;
