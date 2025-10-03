const Calculadora = require('../src/calculadora');

describe('Calculadora', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    test('suma de dos números', () => {
        expect(calculadora.sumar(1, 2)).toBe(3);
    });

    test('resta de dos números', () => {
        expect(calculadora.restar(5, 3)).toBe(2);
    });

    test('multiplicación de dos números', () => {
        expect(calculadora.multiplicar(2, 3)).toBe(6);
    });

    test('división de dos números', () => {
        expect(calculadora.dividir(6, 3)).toBe(2);
    });

    test('división por cero', () => {
        expect(() => calculadora.dividir(6, 0)).toThrow('No se puede dividir entre cero');
    });

    test('seno de un número', () => {
        expect(calculadora.seno(Math.PI / 2)).toBeCloseTo(1);
    });

    test('coseno de un número', () => {
        expect(calculadora.coseno(0)).toBe(1);
    });

    test('tangente de un número', () => {
        expect(calculadora.tangente(Math.PI / 4)).toBeCloseTo(1);
    });

    test('logaritmo base 10', () => {
        expect(calculadora.logaritmoBase10(100)).toBe(2);
    });

    test('logaritmo natural', () => {
        expect(calculadora.logaritmoNatural(Math.E)).toBeCloseTo(1);
    });

    test('logaritmo base 10 de número no válido', () => {
        expect(() => calculadora.logaritmoBase10(-1)).toThrow('El logaritmo no está definido para números menores o iguales a cero');
    });

    test('logaritmo natural de número no válido', () => {
        expect(() => calculadora.logaritmoNatural(0)).toThrow('El logaritmo no está definido para números menores o iguales a cero');
    });
});