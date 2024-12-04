
export default class Calculadora {
    /* atributos */
    // public resultado: number = 0 -> acessado de qualquer lugar
    private resultado: number = 0
    
    /* métodos */
    getResultado(){
        return this.resultado
    }

    protected setResultado(valor: number){
         this.resultado = valor
    }

    somar(valorA: number, valorB:number){
        this.resultado = valorA + valorB
        return this.resultado
    }

    subtrair(valorA: number, valorB: number) {
        this.resultado =  valorA - valorB
        return this.resultado
    }

    multiplicar(valorA: number, valorB: number) {
        this.resultado = valorA * valorB
        return this.resultado
    }

    dividir(valorA: number, valorB: number) {
        if (valorB === 0) {
            return "Não é possível dividir por zero"
        }
        this.resultado = valorA / valorB
        return this.resultado
    }

    porcentagem(valor: number, porcentagem: number) {
        this.resultado =  valor * (porcentagem / 100)
        return this.resultado
    }
}