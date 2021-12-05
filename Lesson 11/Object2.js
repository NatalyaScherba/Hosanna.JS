//task2
let user = {
    name: 'Natalya',
    lastName: 'Scherba',
    age: 36,
    gender: 'female',
    height: 160,
    femelyStatus: 'married',
    children: 2,
    country: 'Ukraine',
    addres: { 
        city: 'Lviv',
        street: 'Siuivo',
        posIndex: 79000
    },
    childrenName: 'Max, Tim',
    husbandName: 'Pavlo',
    husbandage: 45,
    childrenage: '15, 9'

};
console.log(user);

function copy() {
    let userCopy = {};
    let key;
    for (key in user) {
        userCopy[key] = user[key];
    }
    return userCopy;
}
let user2 =copy()
console.log(user2);