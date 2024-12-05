import CalculadoraTrabalhista from "./CalculadoraTrabalhista";
import Funcionario from "./Funcionario";

export enum Escala {
  SeisPorUm = "6x1",
  CincoPorDois = "5x2",
}

// type escala = "6x1" | "5x2";

export class FuncionarioFixo extends Funcionario {
  private escala: Escala;
  private valorFerias: number;
  private valorInss: number;

  constructor(
    escala: Escala,
    nome: string,
    dataAdmissao: Date,
    cargo: string,
    salario: number
  ) {
   
    super(nome, dataAdmissao, cargo, salario)
    this.escala = escala;
    this.valorInss = CalculadoraTrabalhista.calcularInss(salario)
    this.valorFerias = CalculadoraTrabalhista.calcularSalarioFerias(salario)
  }

  getEscala() {return this.escala}
  getValorFerias() {return this.valorFerias}
  getValorInss() {return this.valorInss}

  setEscala(escala: Escala) {this.escala = escala}
  
  setSalario(salario: number) {
    this.salario = salario;
    
    this.valorInss = CalculadoraTrabalhista.calcularInss(salario)
    this.valorFerias = CalculadoraTrabalhista.calcularSalarioFerias(salario)
  }

}

