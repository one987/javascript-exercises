const palindromes = function (str) {
    //function takes string removes punctuation, spaces and converts top lowercase then checks if it matches with itself backwards
    if (str.toLowerCase().replace(/\s+/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") == 
    str.split("").reverse().join("").toLowerCase().replace(/\s+/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")) {
        return true;
    } else return false;
 };

// Do not edit below this line
module.exports = palindromes;
