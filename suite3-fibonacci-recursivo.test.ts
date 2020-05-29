import * as calculadoraAvanzada from './service/calculadora-avanzada';

describe('Calculadora avanzada tests - Fibonacci Recursivo', () => {

  test('fibonacciRecursivo(5) = 8', () => {
    let expected = 8;
    const result = calculadoraAvanzada.fibonacciRecursivo(5);
    expect(expected).toBe(result);
  });

  test('fibonacciRecursivo(7) = 21', () => {
    let expected = 21;
    const result = calculadoraAvanzada.fibonacciRecursivo(7);
    expect(expected).toBe(result);
  });

  test('fibonacciRecursivo(10) = 89', () => {
    let expected = 89;
    const result = calculadoraAvanzada.fibonacciRecursivo(10);
    expect(expected).toBe(result);
  });
  
  test('fibonacciRecursivo(15) = 987', () => {
    let expected = 987;
    const result = calculadoraAvanzada.fibonacciRecursivo(15);
    expect(expected).toBe(result);
  });
  
  test('fibonacciRecursivo(20) = 10946', () => {
    let expected = 10946;
    const result = calculadoraAvanzada.fibonacciRecursivo(20);
    expect(expected).toBe(result);
  });

  test('fibonacciRecursivo(100) = 573147844013817200000', () => {
    let expected = 573147844013817200000;
    const result = calculadoraAvanzada.fibonacciRecursivo(100);
    expect(expected).toBe(result);
  });

  test('fibonacciRecursivo(170) = 2.4400654779819122e+35', () => {
    let expected = 2.4400654779819122e+35;
    const result = calculadoraAvanzada.fibonacciRecursivo(170);
    expect(expected).toBe(result);
  });

  test('fibonacciRecursivo(171) = 3.9481088781499925e+35', () => {
    let expected = 3.9481088781499925e+35;
    const result = calculadoraAvanzada.fibonacciRecursivo(171);
    expect(expected).toBe(result);
  });
  
  test('fibonacciRecursivo(200) = 4.53973694165308e+41', () => {
    let expected = 4.53973694165308e+41;
    const result = calculadoraAvanzada.fibonacciRecursivo(200);
    expect(expected).toBe(result);
  });

  //No acaba nunca
  test('fibonacciRecursivo(500) = 2.2559151616193602e+104', () => {
    let result = null;
    let expected = 2.2559151616193602e+104;
    result = calculadoraAvanzada.fibonacciRecursivo(500);
    expect(expected).toBe(result);
   
  });

});
