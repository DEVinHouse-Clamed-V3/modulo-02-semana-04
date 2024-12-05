import { Escala, FuncionarioFixo } from "./classes/FuncionarioFixo";

const henrique = new FuncionarioFixo(
  Escala.CincoPorDois,
  "Henrique Douglas",
   new Date("2021-01-01"),
  "Desenvolvedor",
  5000
 )
 
 henrique.setEmail("h@gmail.com")
 henrique.setTelefone("40028922")
 
 henrique.setSalario(12340)

 console.log(henrique.getValorFerias())
