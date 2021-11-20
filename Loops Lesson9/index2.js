//Перевернутий трикутник 2
let b = 10;
let result4 = "";
for (let i = 1; i <= b; i++) {
    for (let j = 0; j < b - i; j++) {
        result4 += " "; 
    }
    for (let k = 0; k < i; k++) {
        result4 += "*";
      }
      console.log(result4);
      result4 = "";
}



//Перевернутий трикутник 3
let t = 10;
let result5 = "  ";
for (let i = 1; i <= t - 1; i++) {
  for (let j = 0; j < i; j++) {
    result5 += " ";
  }
  for (let k = 0; k < t - i; k++) {
    result5 += "*";
  }
  console.log(result5);
  result5 = "  ";
}
console.log(result5);
