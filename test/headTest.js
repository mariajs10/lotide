const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
console.log(assertEqual(head([]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));