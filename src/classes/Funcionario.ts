import {randomUUID} from 'crypto'

export default class Funcionario {
    
    readonly matricula: string;

    private nome: string;
    private dataAdmissao: Date;
    private cargo: string;
    private salario: number;
    private dataNascimento?: Date;
    private dataFerias?: Date;
    private endereco?: string;
    private telefone?: string;
    private email?: string;

    constructor(
        nome: string, 
        dataAdmissao: Date, 
        cargo: string, 
        salario: number,

        dataNascimento?: Date,
        endereco?: string,
        telefone?: string,
        email?: string,
        dateFerias?: Date
    ) {

        this.matricula = randomUUID()

        this.nome = nome;
        this.dataAdmissao = dataAdmissao;
        this.cargo = cargo;
        this.salario = salario;

        this.dataNascimento = dataNascimento
        this.endereco = endereco
        this.telefone = telefone
        this.email = email
        this.dataFerias = dateFerias
    }

    
   
}