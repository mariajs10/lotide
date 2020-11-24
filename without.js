const without = function (A,B) {
  let result = [];
  let status = false;
  for (let itemA of A) { //picks first element from given words
    for (let itemB of B) { //picks elements one by one from removing list
      if (itemA === itemB) {
        status = true;
      } else {
        status = false;
      }
    }
    if (!status) {
      result.push(itemA);
      status = true;
    }
  }

  return result;
}

//function to compare arrays and return result
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

//function to print assertion message according to array comparison
const assertArraysEqual = function (actual, remove, answer) {
  let ourAnswer = without(actual,remove);
  if(eqArrays(ourAnswer,answer)) { // if resultof array cpmparison is true then pass
    console.log(`✅✅✅Assertion Passed: ${ourAnswer} === ${answer}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${ourAnswer} !== ${answer}`);
  }
}



assertArraysEqual(["hello", "world", "lighthouse","Maria"],["lighthouse"], ["hello", "world"]);
assertArraysEqual(["1", "2", "3"], [1, 2, "3"], ["1", "2"]);
