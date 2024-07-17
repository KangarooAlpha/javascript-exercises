const convertToCelsius = function(int) {
  int = ((int - 32) / (9/5))
  return (Math.round(int*10)/10)
};

const convertToFahrenheit = function(int) {
  int = (int * (9/5) + 32)
  return (Math.round(int*10)/10)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
