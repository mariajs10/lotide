
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
  let ourAnswer = middle(actual);
  if(eqArrays(ourAnswer,expected)) {
    console.log(`✅✅✅Assertion Passed: ${ourAnswer} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${ourAnswer} !== ${expected}`);
  }
};


const middle = function (array) {
  let answer = [];
  if (array.length <= 2) {
    return answer;
  } else {
    if (array.length % 2 === 0) {
      let index = Math.floor(array.length / 2);
      answer.push(array[index-1]);
      answer.push(array[index]);
      return answer;
    } else {
      let index = Math.floor(array.length / 2);
      answer.push(array[index]);
      return answer;
    }
  }

};

assertArraysEqual([1],[]) // => []
assertArraysEqual([1, 2],[]) // => []
assertArraysEqual([1, 2, 3],[2]) // => [2]
assertArraysEqual([1, 2, 3, 4, 5],[3]) // => [3]
assertArraysEqual([1, 2, 3, 4],[2, 3]) // => [2, 3]
assertArraysEqual([1, 2, 3, 4, 5, 6],[3, 4]) // => [3, 4]