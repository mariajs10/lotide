const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  let results = [];

  array.forEach((item,i) =>{ // declare foreach as a function passing which parameter you need to access
   
    if (!callback(item)) {
      results.push(item);  // execute callback
    } else {
      array.splice(i);
    }
  })
  return results;

};


const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');


const results2 = takeUntil(data2, x => x === ',');
console.log(results2);