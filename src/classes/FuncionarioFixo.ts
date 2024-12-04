import CalculadoraTrabalhista from "./CalculadoraTrabalhista";
import Funcionario from "./Funcionario";

export enum Escala {
  SeisPorUm = "6x1",
  CincoPorDois = "5x2",
}

type escala = "6x1" | "5x2";

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
    const calculadoraTrabalhista = new CalculadoraTrabalhista();

    super(nome, dataAdmissao, cargo, salario)
    this.escala = escala;
    this.valorInss = calculadoraTrabalhista.calcularInss(salario)
    this.valorFerias = calculadoraTrabalhista.calcularSalarioFerias(salario)
  }

}

