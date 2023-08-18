const divide = (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
};

const square = (x) => {
    return x * x;
};

const add = (parameter1, parameter2) => {
    return parameter1 + parameter2;
};

module.exports = {
    divide,
    square,
    add
}





 