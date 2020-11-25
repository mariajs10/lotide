const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const result = {};
  let count = 0;
  for (let item in itemsToCount) {
    if (itemsToCount[item] === true) {
      for (let name of allItems) {
        if (item === name) {
          count++;
        }
      }
      if (count > 0) {
        result[item] = count;
        count = 0;
      }     
    }
  }
return result;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 3);
assertEqual(result1["Agouhanna"], undefined);