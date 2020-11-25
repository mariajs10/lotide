const args = process.argv.slice(2);
let answer = "";
let temp = "";

for (let item of args) {
  for (let items of item) {
    if (item.indexOf(items) === 0) {
      temp = items;
    } else {
      answer += items;      
    }    
  }
  answer += temp + "ay ";
}
console.log(answer);