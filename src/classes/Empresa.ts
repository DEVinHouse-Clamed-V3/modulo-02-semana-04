import Funcionario from "./Funcionario";

export default class Empresa {
  private nome: string;
  private cnpj: string;
  private funcionarios: Funcionario[] = [];

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  contratarFuncionario(funcionario: Funcionario) {
    this.funcionarios.push(funcionario);
    // this.funcionarios = [...this.funcionarios, funcionario]
  }

  demitirFuncionario(funcionario: Funcionario) {
    this.funcionarios = this.funcionarios.filter(item => item.getMatricula() !== funcionario.getMatricula() );
  }

  desativarFuncionaro(funcionario: Funcionario) {
    this.funcionarios = this.funcionarios.map(item => {
        if (item.getMatricula() === funcionario.getMatricula()) {
            item.setStatus(false);
        }
        return item;
    })
  }

  getFuncionarios() {
    return this.funcionarios;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome: string) {
    this.nome = nome;
  }

  getCnpj() {
    return this.cnpj;
  }

  setCnpj(cnpj: string) {
    this.cnpj = cnpj;
  }
}
