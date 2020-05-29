import * as calculadoraAvanzada from './service/calculadora-avanzada';

describe('Calculadora avanzada tests - Fibonacci Memoization', () => {

  test('fibonacci(5) = 8', () => {
    let expected = 8;
    const result = calculadoraAvanzada.fibonacci(5,{});
    expect(expected).toBe(result);
  });

  test('fibonacci(7) = 21', () => {
    let expected = 21;
    const result = calculadoraAvanzada.fibonacci(7,{});
    expect(expected).toBe(result);
  });

  test('fibonacci(10) = 89', () => {
    let expected = 89;
    const result = calculadoraAvanzada.fibonacci(10,{});
    expect(expected).toBe(result);
  });
  
  test('fibonacci(15) = 987', () => {
    let expected = 987;
    const result = calculadoraAvanzada.fibonacci(15,{});
    expect(expected).toBe(result);
  });
  
  test('fibonacci(20) = 10946', () => {
    let expected = 10946;
    const result = calculadoraAvanzada.fibonacci(20,{});
    expect(expected).toBe(result);
  });

  test('fibonacci(100) = 573147844013817200000', () => {
    let expected = 573147844013817200000;
    const result = calculadoraAvanzada.fibonacci(100,{});
    expect(expected).toBe(result);
  });

  test('fibonacci(170) = 2.4400654779819122e+35', () => {
    let expected = 2.4400654779819122e+35;
    const result = calculadoraAvanzada.fibonacci(170,{});
    expect(expected).toBe(result);
  });

  test('fibonacci(171) = 3.9481088781499925e+35', () => {
    let expected = 3.9481088781499925e+35;
    const result = calculadoraAvanzada.fibonacci(171,{});
    console.log(result);
    expect(expected).toBe(result);
  });
  
  test('fibonacci(200) = 4.53973694165308e+41', () => {
    let expected = 4.53973694165308e+41;
    const result = calculadoraAvanzada.fibonacci(200,{});
    console.log(result);
    expect(expected).toBe(result);
  });

  test('fibonacci(500) = 2.2559151616193602e+104', () => {
    let expected = 2.2559151616193602e+104;
    const result = calculadoraAvanzada.fibonacci(500,{});
    console.log(result);
    expect(expected).toBe(result);
  });
});
