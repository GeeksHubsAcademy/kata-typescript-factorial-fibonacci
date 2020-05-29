import * as calculadoraAvanzada from './service/calculadora-avanzada';

describe('Calculadora avanzada tests - factorialIterativo', () => {

  test('factorialIterativo(5) = 120', () => {
    let expected = 120;
    const result = calculadoraAvanzada.factorialIterativo(5);
    expect(expected).toBe(result);
  });

  test('factorialIterativo(7) = 5040', () => {
    let expected = 5040;
    const result = calculadoraAvanzada.factorialIterativo(7);
    expect(expected).toBe(result);
  });

  test('factorialIterativo(10) = 3628800', () => {
    let expected = 3628800;
    const result = calculadoraAvanzada.factorialIterativo(10);
    expect(expected).toBe(result);
  });
  
  test('factorialIterativo(15) = 1307674368000', () => {
    let expected = 1307674368000;
    const result = calculadoraAvanzada.factorialIterativo(15);
    expect(expected).toBe(result);
  });
  
  test('factorialIterativo(20) = 2432902008176640000', () => {
    let expected = 2432902008176640000;
    const result = calculadoraAvanzada.factorialIterativo(20);
    expect(expected).toBe(result);
  });

  test('factorialIterativo(100) = 9.33262154439441e+157', () => {
    let expected = 9.33262154439441e+157;
    const result = calculadoraAvanzada.factorialIterativo(100);
    expect(expected).toBe(result);
  });

  test('factorialIterativo(170) = 7.257415615307994e+306', () => {
    let expected = 7.257415615307994e+306;
    const result = calculadoraAvanzada.factorialIterativo(170);
    expect(expected).toBe(result);
  });

  test('factorialIterativo(171) = Infinity', () => {
    let expected = Infinity;
    const result = calculadoraAvanzada.factorialIterativo(171);
    console.log(result);
    expect(expected).toBe(result);
  });

  
});
