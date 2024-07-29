const palindromes = function (arr) {
    const alphanumerics = "abcdefghijklmnopqrstuvwxyz0123456789"

    const newArr = arr
    .toLowerCase()
    .split("")
    .filter((char) => alphanumerics.includes(char))
    .join("")
    
    const reverseString = newArr.split("").reverse().join("")

    return reverseString === newArr
};
// Do not edit below this line
module.exports = palindromes;
