const sayHello = require('./learn.js');
test('sayHello возвращает правильное приветствие', () => {
    const firstName = 'Иван';
    const lastName = 'Иванов';
    const expected = 'Привет, ты чудо Иван Иванов!';
    expect(sayHello(firstName, lastName)).toBe(expected);
  });
test('sayHello возвращает не правильное приветствие', () =>{
    const firstName = '';
    const lastName = 'Иванов';
    const expected = 'Привет, ты чудо Иванов!';
    expect(sayHello(firstName, lastName)).toBe(expected);
})
test('sayHello возвращает не правильное приветствие', () =>{
    const firstName = '@#$%';
    const lastName = '^&*()';
    const expected = 'Привет, ты чудо @#$% ^&*()!';
    expect(sayHello(firstName, lastName)).toBe(expected);
})


