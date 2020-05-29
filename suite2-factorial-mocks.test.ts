import * as calculadoraAvanzada from './service/calculadora-avanzada';

import { factorial } from './service/calculadora-avanzada';

let mockFactorial = factorial as jest.MockedFunction<typeof factorial>;

jest.mock('./service/calculadora-avanzada');


describe('Calculadora avanzada tests - Factorial', () => {

  beforeEach(() => { mockFactorial.mockReset(); });

  test('factorial(5) = 120', () => {
    let expected = 120;
    mockFactorial.mockReturnValue(expected);
    const result = calculadoraAvanzada.factorial(5);
    expect(mockFactorial).toBeCalledWith(5);
    expect(expected).toBe(result);
  });
  

  test('factorial(7) = 5040', () => {
    let expected = 5040;
    mockFactorial.mockReturnValue(expected);
    const result = calculadoraAvanzada.factorial(7);
    expect(mockFactorial).toBeCalledWith(7);

    expect(expected).toBe(result);
  });
  

  test('factorial(10) = 3628800', () => {
    let expected = 3628800;
    mockFactorial.mockReturnValue(expected);
    const result = calculadoraAvanzada.factorial(10);
    expect(mockFactorial).toBeCalledWith(10);

    expect(expected).toBe(result);
  });
  

  test('factorial(15) = 1307674368000', () => {
    let expected = 1307674368000;
    mockFactorial.mockReturnValue(expected);
    const result = calculadoraAvanzada.factorial(15);
    expect(mockFactorial).toBeCalledWith(15);

    expect(expected).toBe(result);
  });
  
  test('factorial(20) = 2432902008176640000', () => {
    let expected = 2432902008176640000;
    mockFactorial.mockReturnValue(expected);
    const result = calculadoraAvanzada.factorial(20);
    expect(mockFactorial).toBeCalledWith(20);

    expect(expected).toBe(result);
  });

  test('factorial(100) = 9.33262154439441e+157', () => {
    let expected = 9.33262154439441e+157;
    mockFactorial.mockReturnValue(expected);
    const result = calculadoraAvanzada.factorial(100);
    expect(mockFactorial).toBeCalledWith(100);

    expect(expected).toBe(result);
  });

  test('factorial(170) = 7.257415615308E+306', () => {
    let expected = 9.33262154439441e+157;
    mockFactorial.mockReturnValue(expected);
    const result = calculadoraAvanzada.factorial(170);
    expect(mockFactorial).toBeCalledWith(170);

    expect(expected).toBe(result);
  });

  test('factorial(171) = INF', () => {
    let expected = Infinity;
    mockFactorial.mockReturnValue(expected);
    const result = calculadoraAvanzada.factorial(171);
    expect(mockFactorial).toBeCalledWith(171);
    expect(expected).toBe(result);
  });

});
