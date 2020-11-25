const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

function countLetters(string) {
  var result = {};
 
  string = string.toLowerCase(); // convert all characters to either lower or uppercase
  for (let str of string) { //acess each letter of the string with loop
    //exclude the character if it is " "
    if(str !== " ") {
      result[str] = 0; //creates keys for result object with all individual letters except " "
    }
  }
  return count(string,result);

};

const count = function (string,result) {
  for (let item of string) {
    if(item !== " ") {
      for (let key in result) { //loops all the keys of result object
        if (key === item ) {
          result[key]++;
        } // if any key is same as the letter of the string being checked               
      }
    } 
  }
return result;
};



const result = countLetters("I am the wife of Rohit Jacob");

assertEqual(result["i"],3);