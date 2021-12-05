//task3
let userN = {
    name: 'Natalya',
    lastName: 'Scherba',
    age: 36,
    gender: 'female',
    height: 160,
    femelyStatus: 'married',
    children: 2,
    country: 'Ukraine',
    addres:{
    city: 'Lviv',
    street: 'Siuivo',
    posIndex: 79000
    },
    childrenName: 'Max, Tim',
    husbandName: 'Pavlo',
    husbandage: 45,
    childrenage: '15, 9'

};

let copyUser = Object.assign(userN);
console.log('');
console.log(userN);
console.log(copyUser);
