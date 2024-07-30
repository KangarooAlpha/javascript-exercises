const fibonacci = function(num) {
    let numA = (0);
    let numB = (1);
    let nTh = [];
    if (num <= 2 && num >= 1) {
        return 1;
    }
    else if (num == 0) {
        return 0;
    }
    else if (num < 0) {
        return ("OOPS");
    }

    for (let i = 1; i < num; i++) {
        let total = ((numA + numB))
        numA = numB
        numB = total
        //numB = nTh[nTh.lenght - 1] 
    }
    return numB
    //return nTh[nTh.lenght - 1]

};

// Do not edit below this line
module.exports = fibonacci;
