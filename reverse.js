const args = process.argv.slice(2);
let answer = "";
for (let item of args) {
  for (let i = item.length - 1; i >= 0; i--) {
    answer += item[i];
  }
  console.log(answer);
  answer = "";
}

