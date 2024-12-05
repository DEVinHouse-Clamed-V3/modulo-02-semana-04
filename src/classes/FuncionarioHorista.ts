import Funcionario from "./Funcionario";

export class FuncionarioHorista extends Funcionario {
  private valorHora: number;
  private horasTrabalhadas: number = 0;
  private periodoContrato: {
    inicio: Date;
    fim: Date;
  };

  constructor(
    valorHora: number,
    periodoContrato: { inicio: Date; fim: Date },
    nome: string,
    cargo: string,
    salario: number,
  ) {
    super(nome, periodoContrato.inicio, cargo, salario);
    this.valorHora = valorHora;
    this.periodoContrato = periodoContrato;
  }

  getValorHora() {
    return this.valorHora;
  }
  getHorasTrabalhadas() {
    return this.horasTrabalhadas;
  }
  getPeriodoContrato() {
    return this.periodoContrato;
  }

  setValorHora(valorHora: number) {
    this.valorHora = valorHora;
  }

  setHorasTrabalhadas(horasTrabalhadas: number) {
    this.horasTrabalhadas = this.horasTrabalhadas + horasTrabalhadas;
  }

  setPeriodoInicioContrato(inicio: Date) {
    this.periodoContrato.inicio = inicio
  }

  setPeriodoFimContrato(fim: Date) {
    this.periodoContrato.fim = fim
  }

  getSalario() {
    return this.horasTrabalhadas * this.valorHora  
  }
}
