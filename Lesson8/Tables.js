//Cтоли
const number = Number(prompt('Введіть номер стола'));

const dev10 = number % 10;

const table1 = dev10 === 1 && number !== 11;

const notBetween10and20 = (number >= 10 && number <= 20) === false;

const table2 = dev10 > 1 && dev10 < 5 && notBetween10and20;
if (table1) {
    console.log(number + ' стіл');
} else if (table2) {
    console.log(number + ' столи');
} else {
    console.log(number + ' столів');
}

