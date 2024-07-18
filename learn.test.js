const sayHello = require('./learn.js');
test('sayHello возвращает правильное приветствие1', () => {
    const firstName = 'Иван';
    const lastName = 'Иванов';
    const expected = 'Привет, ты чудо Иван Иванов!';
    expect(sayHello(firstName, lastName)).toBe(expected);
  });
test('sayHello возвращает не правильное приветствие2', () =>{
    const firstName = '';
    const lastName = 'Иванов';
    const expected = 'Привет, ты чудо  Иванов!';
    expect(sayHello(firstName, lastName)).toBe(expected);
})
test('sayHello возвращает не правильное приветствие3', () =>{
    const firstName = '@#$%';
    const lastName = '^&*()';
    const expected = 'Привет, ты чудо @#$% ^&*()!';
    expect(sayHello(firstName, lastName)).toBe(expected);
})

