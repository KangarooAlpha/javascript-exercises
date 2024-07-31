const findTheOldest = function(arr) {
    arr.sort((a,b) =>{
        if (a.yearOfDeath == undefined) {
            a.yearOfDeath = new Date().getFullYear()
        }
        else if(b.yearOfDeath == undefined) {
            b.yearOfDeath = new Date().getFullYear()
        }
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath-b.yearOfBirth))
            return -1
        else if ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath-b.yearOfBirth))
            return +1
        else {
            return 0
        }


    })
    return arr[0]
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    }
]

console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
