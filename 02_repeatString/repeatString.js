const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    rtString = '';
    for (i = 0; i < num; i++){
       rtString += string;
    }
    return rtString;
};

// Do not edit below this line
module.exports = repeatString;
