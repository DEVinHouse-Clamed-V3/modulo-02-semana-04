import { randomUUID } from "crypto";

export default abstract class Funcionario {
  readonly matricula: string;

  private nome: string;
  private dataAdmissao: Date;
  private cargo: string;
  protected salario: number;

  private dataNascimento?: Date;
  private dataFerias?: Date;
  private endereco?: string;
  private telefone?: string;
  private email?: string;
  private status: boolean = true;

  constructor(
    nome: string,
    dataAdmissao: Date,
    cargo: string,
    salario: number,

    dataNascimento?: Date,
    endereco?: string,
    telefone?: string,
    email?: string,
    dateFerias?: Date,
  ) {
    this.matricula = randomUUID();

    this.nome = nome;
    this.dataAdmissao = dataAdmissao;
    this.cargo = cargo;
    this.salario = salario;

    this.dataNascimento = dataNascimento;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.dataFerias = dateFerias;
  }


  getStatus() { return this.status; }
 
  setStatus(status: boolean) { this.status = status; }

  getMatricula() {
    return this.matricula;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome: string) {
    this.nome = nome;
  }

  getDataAdmissao() {
    return this.dataAdmissao;
  }

  setDataAdmissao(dataAdmissao: Date) {
    this.dataAdmissao = dataAdmissao;
  }

  getCargo() {
    return this.cargo;
  }

  setCargo(cargo: string) {
    this.cargo = cargo;
  }

  getSalario() {
    return this.salario;
  }

  setSalario(salario: number) {
    this.salario = salario;
  }

  getDataNascimento() {
    return this.dataNascimento;
  }

  setDataNascimento(dataNascimento?: Date) {
    this.dataNascimento = dataNascimento;
  }

  getDataFerias() {
    return this.dataFerias;
  }

  setDataFerias(dataFerias?: Date) {
    this.dataFerias = dataFerias;
  }

  getEndereco() {
    return this.endereco;
  }

  setEndereco(endereco?: string) {
    this.endereco = endereco;
  }

  getTelefone() {
    return this.telefone;
  }

  setTelefone(telefone?: string) {
    this.telefone = telefone;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email?: string) {
    this.email = email;
  }
}
