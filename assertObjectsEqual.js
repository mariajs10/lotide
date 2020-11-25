const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { // first check: if objec lengths are equal
    const keylist = Object.keys(object1);

    for (let list of keylist) {
      if (object1[list].length === object2[list].length) { //if nested arrays check if teir lengths are eqal
        for (let item in object1[list]) { //for each key of object1
          if (object1[list][item] !== object2[list][item]) { //check if they have the same value in both objects
            return false;
          }
        }
      } else {
        return false;
      }
    }
    return true; // if all checks are clear objects are equal
  } else {
    return false;
  }
   
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅The objects ${inspect(actual)} is EQUAL to the object ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑The objects ${inspect(actual)} is NOT equal to the object ${inspect(expected)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // pass

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); //fail


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // fail