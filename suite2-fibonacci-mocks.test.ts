import * as calculadoraAvanzada from './service/calculadora-avanzada';

import { fibonacciIterativo } from './service/calculadora-avanzada';
const mockFibonacci = fibonacciIterativo as jest.MockedFunction<typeof fibonacciIterativo>;
jest.mock('./service/calculadora-avanzada');

describe('Calculadora avanzada tests - Fibonacci', () => {
  beforeEach(() => mockFibonacci.mockReset());

  test('fibonacciIterativo(5) = 8', () => {
    let expected = 8;
    mockFibonacci.mockReturnValue(expected);
    const result = calculadoraAvanzada.fibonacciIterativo(5);
    expect(mockFibonacci).toBeCalledWith(5);
    expect(expected).toBe(result);
  });
  

  test('fibonacciIterativo(10) = 89', () => {
    let expected = 89;
    mockFibonacci.mockReturnValue(expected);
    const result = calculadoraAvanzada.fibonacciIterativo(7);
    expect(mockFibonacci).toBeCalledWith(7);

    expect(expected).toBe(result);
  });
  

  test('fibonacciIterativo(15) = 987', () => {
    let expected = 987;
    mockFibonacci.mockReturnValue(expected);
    const result = calculadoraAvanzada.fibonacciIterativo(10);
    expect(mockFibonacci).toBeCalledWith(10);

    expect(expected).toBe(result);
  });
  

  test('fibonacciIterativo(15) = 0', () => {
    let expected = 0;
    mockFibonacci.mockReturnValue(expected);
    const result = calculadoraAvanzada.fibonacciIterativo(15);
    expect(mockFibonacci).toBeCalledWith(15);

    expect(expected).toBe(result);
  });
  
  test('fibonacciIterativo(20) = 0', () => {
    let expected = 0;
    mockFibonacci.mockReturnValue(expected);
    const result = calculadoraAvanzada.fibonacciIterativo(20);
    expect(mockFibonacci).toBeCalledWith(20);

    expect(expected).toBe(result);
  });

  test('fibonacciIterativo(100) = 0', () => {
    let expected = 0;
    mockFibonacci.mockReturnValue(expected);
    const result = calculadoraAvanzada.fibonacciIterativo(100);
    expect(mockFibonacci).toBeCalledWith(100);

    expect(expected).toBe(result);
  });

  test('fibonacciIterativo(170) = 0', () => {
    let expected = 0;
    mockFibonacci.mockReturnValue(expected);
    const result = calculadoraAvanzada.fibonacciIterativo(170);
    expect(mockFibonacci).toBeCalledWith(170);

    expect(expected).toBe(result);
  });

  test('fibonacciIterativo(171) = 0', () => {
    let expected = 0;
    mockFibonacci.mockReturnValue(expected);
    const result = calculadoraAvanzada.fibonacciIterativo(171);
    expect(mockFibonacci).toBeCalledWith(171);
    expect(expected).toBe(result);
  });

});
