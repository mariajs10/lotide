const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: 😀 ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`Assertion Failed:  ${actual} !== ${expected}`);
    return false;
  }

  
};

const findKey = function(object, callback) {
  for (let key in object) { //loops through all keys in object
    if (callback(object[key])) { // checks if key's value is equal to given value
      
      return key; // returns key for the first match
    } else { //do nothing just skip
    }
  }

};




console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma"));