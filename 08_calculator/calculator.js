const add = function(a, b) {
return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let sum=0;
    for (let i=0; i<array.length; i++) {
        sum = sum + array[i];
    } 
    return sum;
	
};

const multiply = function(array) {
  let sum=1;
    for (let i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}; //thanks stack overflow

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
	
}; 

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
