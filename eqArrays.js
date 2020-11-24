// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};


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
}

// TEST CODE


assertEqual(eqArrays([1, 2, 3], [1, 1, 3]), true); // => should PASS