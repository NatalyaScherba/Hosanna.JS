//Трикутник
let result = '';
for (let i = 0; i < 10; i++) {
    result += '*';
console.log(result);
} 




// //Прямокутник
let result1 = '  ';
 for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
     result1 += '*';
     }
     console.log(result1);
     result1 = '  ';
 }
  


//Квадрат
let result2 = '';
 for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
       result2 += '*  ';
     }
     console.log(result2);
     result2 = "";
 }



//Перевернутий трикутник 1
let n = 10;
 let result3 = '';
 for (let i = 0; i < n; i++) {
     for (j = 0; j < n - i; j++) {
         result3 += "*";
     }
     console.log(result3);
     result3 = "";
 }