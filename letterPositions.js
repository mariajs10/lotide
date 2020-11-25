
const eqArrays = function (a, b) {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};


const assertArraysEqual = function (actual, expected) {
  if(eqArrays(actual,expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
}

function letterPosition(string) {
  var result = {};
 
  string = string.toLowerCase(); // convert all characters to either lower or uppercase
  for (let str of string) { //acess each letter of the string with loop
    //exclude the character if it is " "
    if(str !== " ") {
      result[str] = []; //creates keys for result object with all individual letters except " "
    }
  }

  for (let i = 0; i < string.length; i++) {
    if(string[i] !== " ") {
      for (var key in result) { //loops all the keys of result object
        if ( key == string[i] ) {
          result[key].push(i);
        } // if any key is same as the letter of the string being checked
               
      }
    } 
  }
    return result;
}

const result = letterPosition("I am the wife of Rohit Jacob");
assertArraysEqual(result["i"],[0,10,20]);
//countLetters("Javascript is difficult yet fun");