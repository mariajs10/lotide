const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { // first check: if objec lengths are equal
    const keylist = Object.keys(object1);
    
    for (let list of keylist) {
      if (object1[list].length === object2[list].length) { //if nested arrays check if teir lengths are eqal
        for (let item in object1[list]) {
          if (object1[list][item] !== object2[list][item]) {
            return false;
          }
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
   
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
