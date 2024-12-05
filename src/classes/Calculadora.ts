
export default class Calculadora {

    somar(valorA: number, valorB:number){
        return valorA + valorB
    }

    subtrair(valorA: number, valorB: number) {
        return  valorA - valorB
    }

    multiplicar(valorA: number, valorB: number) {
        return valorA * valorB
    }

    dividir(valorA: number, valorB: number) {
        const ZERO = 0;
        if (valorB === ZERO) {
            return "Não é possível dividir por zero"
        }

        return valorA / valorB
    }

    porcentagem(valor: number, porcentagem: number) {
        const PERCENT_DIVISOR = 100;
        return valor * (porcentagem / PERCENT_DIVISOR)
    }
}