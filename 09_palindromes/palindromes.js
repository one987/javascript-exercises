const palindromes = function (str) {
    if (str.toLowerCase().replace(/\s+/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") == 
    str.split("").reverse().join("").toLowerCase().replace(/\s+/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")) {
        return true;
    } else return false;
 };

// Do not edit below this line
module.exports = palindromes;
