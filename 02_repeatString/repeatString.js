const repeatString = function(str, num) {
    
    let repeatedString = "";

    while (num > 0) {
        repeatedString += str;
        num--;
    }
    return repeatedString;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  



repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('hey', getRandomInt(100))
repeatString('', 10);


// Do not edit below this line
module.exports = repeatString;
