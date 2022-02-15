import operate from '../logic/operate';

describe('testing operate.js', () => {
  test('testing addition', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('testing subtraction', () => {
    expect(operate(7, 5, '-')).toBe('2');
  });

  test('testing multiplication', () => {
    expect(operate(3, 2, 'x')).toBe('6');
  });

  test('testing division', () => {
    expect(operate(25, 5, '÷')).toBe('5');
  });
});
