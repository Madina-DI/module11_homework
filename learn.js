function sayHello(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    return 'Привет, ты чудо ' + fullName + '!';
}

module.exports = sayHello;