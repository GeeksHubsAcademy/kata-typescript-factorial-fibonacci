import * as calculadoraAvanzada from './service/calculadora-avanzada';

describe('Calculadora avanzada tests - Factorial', () => {

  test('factorial(5) = 120', () => {
    let expected = 120;
    const result = calculadoraAvanzada.factorial(5);
    expect(expected).toBe(result);
  });

  test('factorial(7) = 5040', () => {
    let expected = 5040;
    const result = calculadoraAvanzada.factorial(7);
    expect(expected).toBe(result);
  });

  test('factorial(10) = 3628800', () => {
    let expected = 3628800;
    const result = calculadoraAvanzada.factorial(10);
    expect(expected).toBe(result);
  });
  
  test('factorial(15) = 1307674368000', () => {
    let expected = 1307674368000;
    const result = calculadoraAvanzada.factorial(15);
    expect(expected).toBe(result);
  });
  
  test('factorial(20) = 2432902008176640000', () => {
    let expected = 2432902008176640000;
    const result = calculadoraAvanzada.factorial(20);
    expect(expected).toBe(result);
  });

  test('factorial(100) = 9.33262154439441e+157', () => {
    let expected = 9.33262154439441e+157;
    const result = calculadoraAvanzada.factorial(100);
    expect(expected).toBe(result);
  });

  test('factorial(170) = 7.257415615307994e+306', () => {
    let expected = 7.257415615307994e+306;
    const result = calculadoraAvanzada.factorial(170);
    expect(expected).toBe(result);
  });

  test('factorial(171) = Infinity', () => {
    // 10 segundos para el timeout
    jest.setTimeout(10000);

    let expected = Infinity;
    const result = calculadoraAvanzada.factorial(171);
    console.log(result);
    expect(expected).toBe(result);


  });

  
});
