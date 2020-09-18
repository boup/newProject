import data from "../Cities"
var myarray = data.map((arr) => arr.destination);
function getUnique(array) {
    var uniqueArray = [];

    // Loop through array values
    for (var value of array) {
      if (uniqueArray.indexOf(value) === -1) {
        uniqueArray.push(value);
      }
    }
    return uniqueArray;
  }
  export const cityData=getUnique(myarray);