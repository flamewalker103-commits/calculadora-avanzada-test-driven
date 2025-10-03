class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) throw new Error('No se puede dividir entre cero');
        return a / b;
    }

    seno(x) {
        return Math.sin(x);
    }

    coseno(x) {
        return Math.cos(x);
    }

    tangente(x) {
        return Math.tan(x);
    }

    logaritmoBase10(x) {
        if (x <= 0) throw new Error('El logaritmo no está definido para números menores o iguales a cero');
        return Math.log10(x);
    }

    logaritmoNatural(x) {
        if (x <= 0) throw new Error('El logaritmo no está definido para números menores o iguales a cero');
        return Math.log(x);
    }
}

module.exports = Calculadora;