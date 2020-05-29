import * as calculadoraAvanzada from './service/calculadora-avanzada';

jest.mock('./service/calculadora-avanzada');

describe('Calculadora avanzada tests', () => {
  test('mock método vacío', () => {
    calculadoraAvanzada.empty();

    expect(calculadoraAvanzada.empty).toHaveBeenCalledTimes(1);
    expect(calculadoraAvanzada.empty).toHaveBeenCalledWith();
  });
  
});
