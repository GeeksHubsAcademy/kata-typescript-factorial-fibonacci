import * as calculadoraAvanzada from './service/calculadora-avanzada';

describe('Calculadora avanzada tests - Fibonacci Iterativo', () => {

  test('fibonacciIterativo(5) = 8', () => {
    let expected = 8;
    const result = calculadoraAvanzada.fibonacciIterativo(5);
    expect(expected).toBe(result);
  });

  test('fibonacciIterativo(7) = 21', () => {
    let expected = 21;
    const result = calculadoraAvanzada.fibonacciIterativo(7);
    expect(expected).toBe(result);
  });

  test('fibonacciIterativo(10) = 89', () => {
    let expected = 89;
    const result = calculadoraAvanzada.fibonacciIterativo(10);
    expect(expected).toBe(result);
  });
  
  test('fibonacciIterativo(15) = 987', () => {
    let expected = 987;
    const result = calculadoraAvanzada.fibonacciIterativo(15);
    expect(expected).toBe(result);
  });
  
  test('fibonacciIterativo(20) = 10946', () => {
    let expected = 10946;
    const result = calculadoraAvanzada.fibonacciIterativo(20);
    expect(expected).toBe(result);
  });

  test('fibonacciIterativo(100) = 573147844013817200000', () => {
    let expected = 573147844013817200000;
    const result = calculadoraAvanzada.fibonacciIterativo(100);
    expect(expected).toBe(result);
  });

  test('fibonacciIterativo(170) = 2.4400654779819122e+35', () => {
    let expected = 2.4400654779819122e+35;
    const result = calculadoraAvanzada.fibonacciIterativo(170);
    expect(expected).toBe(result);
  });

  test('fibonacciIterativo(171) = 3.9481088781499925e+35', () => {
    let expected = 3.9481088781499925e+35;
    const result = calculadoraAvanzada.fibonacciIterativo(171);
    console.log(result);
    expect(expected).toBe(result);
  });
  
  test('fibonacciIterativo(200) = 4.53973694165308e+41', () => {
    let expected = 4.53973694165308e+41;
    const result = calculadoraAvanzada.fibonacciIterativo(200);
    console.log(result);
    expect(expected).toBe(result);
  });

  test('fibonacciIterativo(500) = 2.2559151616193602e+104', () => {
    let expected = 2.2559151616193602e+104;
    const result = calculadoraAvanzada.fibonacciIterativo(500);
    console.log(result);
    expect(expected).toBe(result);
  });
});
