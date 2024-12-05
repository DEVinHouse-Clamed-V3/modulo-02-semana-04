const LIMITE_INSS_FAIXA_4 = 4000.04;
const LIMITE_INSS_FAIXA_3 = 2666.69
const LIMITE_INSS_FAIXA_2 = 1412.01
const TETO_INSS = 908.85

const ALIQUOTA_INSS_FAIXA_4 = 14;
const ALIQUOTA_INSS_FAIXA_3 = 12;
const ALIQUOTA_INSS_FAIXA_2 = 9;
const ALIQUOTA_INSS_FAIXA_1 = 7.5;
const PERCENTUAL = 100;

export default class CalculadoraTrabalhista  {

    static calcularInss(salarioBruto: number) {
        let inss = 0

        if (salarioBruto > LIMITE_INSS_FAIXA_4) {
            inss = salarioBruto * ALIQUOTA_INSS_FAIXA_4 / PERCENTUAL
        } else if (salarioBruto > LIMITE_INSS_FAIXA_3) {
            inss = salarioBruto * ALIQUOTA_INSS_FAIXA_3 / PERCENTUAL
        } else if (salarioBruto > LIMITE_INSS_FAIXA_2) {
            inss = salarioBruto * ALIQUOTA_INSS_FAIXA_2 / PERCENTUAL
        } else {
            inss = salarioBruto * ALIQUOTA_INSS_FAIXA_1 / PERCENTUAL
        }

        if (inss > TETO_INSS) inss = TETO_INSS

        return inss
    }

   static calcularImpostoDeRenda(renda: number): number {
        let imposto = 0
        const LIMITE_ISENCAO_IR = 2112;
        if (renda <= LIMITE_ISENCAO_IR) imposto = 0;
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
        const tercoSalario =  salarioMensal * (PORCENTAGEM_BASE_CALCULO_FERIAS / PERCENTUAL)
        return salarioMensal + tercoSalario
    }
    
}