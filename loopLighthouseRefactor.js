//function to return the answer depended on given scenario
const check = function(number1, number2, wordList) {
  let result = "";
  if (number1 === true && number2 === true) {
    result += wordList[0] + wordList[1];
  } else if (number1 === true) {
    result += wordList[0];
  } else if (number2 === true) {
    result += wordList[1];
  }
  return result;
};

//function to check if given number is divisible by multiple
const checkmultiples = (currentNum, multiple) => {
  if (currentNum % multiple === 0) {
    return true;
  } else {
    return false;
  }
};

const loopyLighthouse = function(range, multiples, words) {
  for (let item = range[0]; item <= range[1]; item++) {
    if (checkmultiples(item, multiples[0]) && checkmultiples(item, multiples[1])) {
      console.log(check(true, true, words));
    } else if (checkmultiples(item, multiples[0])) { //checks only for one
      console.log(check(true, false, words));
    } else if (checkmultiples(item, multiples[1])) { // check for the second one
      console.log(check(false, true, words));
    } else { //if neither then prints the number itself
      console.log(item);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);