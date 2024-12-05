export default class CalculadoraTrabalhista  {

    static calcularInss(salarioBruto: number) {
        let inss = 0

        if (salarioBruto > 4000.04) {
            inss = salarioBruto * 14 / 100
        } else if (salarioBruto > 2666.69) {
            inss = salarioBruto * 12 / 100
        } else if (salarioBruto > 1412.01) {
            inss = salarioBruto * 9 / 100
        } else {
            inss = salarioBruto * 7.5 / 100
        }

        if (inss > 908.85) inss = 908.85

        return inss
    }

   static calcularImpostoDeRenda(renda: number): number {
        let imposto = 0
        if (renda <= 2112) imposto = 0;
        else if (renda <= 2826.65) imposto = renda * 0.075;
        else if (renda <= 3751.05) imposto =  renda * 0.15;
        else if (renda <= 4664.68) imposto = renda * 0.225;
        else return imposto =  renda * 0.275;
        return imposto
    };

    static calcularSalarioLiquido(salarioBruto: number) {
        const descontoInss = this.calcularInss(salarioBruto)
        const descontoImpostoRenda = this.calcularImpostoDeRenda(salarioBruto)
        return salarioBruto - descontoInss - descontoImpostoRenda
    }
    
    static calcularSalarioFerias(salarioMensal: number) {
        const PORCENTAGEM_BASE_CALCULO_FERIAS = 33
        const tercoSalario =  salarioMensal * (PORCENTAGEM_BASE_CALCULO_FERIAS / 100)
        return salarioMensal + tercoSalario
    }
    
}