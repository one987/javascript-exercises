//const sumAll = function(num1, num2) {}
    
function sumAll(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof (num2) !== 'number' || typeof (num1) !== 'number') {
        return 'ERROR';
    } else {
        if (num1 < num2) {
            n1 = num1;
            n2 = num2;
        } else {
            n1 = num2;
            n2 = num1;
        }
        return (n1 + n2) * (n2 / 2);
    }
}

  sumAll(1, 4);
  sumAll(1, 4000);
  sumAll(123, 1);
  sumAll(-10, 4);
  sumAll(10, "90");
  sumAll(10, [90, 1]);


// Do not edit below this line
module.exports = sumAll;
