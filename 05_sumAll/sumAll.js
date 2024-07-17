const sumAll = function(start, end) {
    if (!(Number.isInteger(start)) ||
        !(Number.isInteger(end)) ||
        start < 0 || end < 0){
            return ("ERROR");
    }
    let totalSum = 0;
    if (start > end) {
        for (end; end <= start; ++end) {
            totalSum += end
    }}
    else{
        for (start; start <= end; ++start) {
            totalSum += start
        }
    }
    return (totalSum)

};

// Do not edit below this line
module.exports = sumAll;
