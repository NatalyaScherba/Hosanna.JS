//Перевірка на ім'я і посаду
const name = prompt('Як вас звати?');
if (name === 'Ігор') {
    console.log('Привіт адмін Ігор!');
}
if (name === 'Сергій') {
    console.log('Привіт адмін Сергій!');
}
if (name === 'Павло') {
    console.log('Привіт хворий, Павло!');
}
if (name === 'Оля') {
    console.log('Вітання вам , медсестра Оля!');
}
if (name === 'Оксана') {
    console.log('Вітання вам , медсестра Оксана!');
}

else if (name !== 'Ігор' && name !== 'Сергій' && name !== 'Павло' && name !== 'Оля' && name !== 'Оксана') {
    alert('Постороннім вхід заборонено, коронавірус!');
}

