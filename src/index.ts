import Empresa from "./classes/Empresa";
import Funcionario from "./classes/Funcionario";
import { Escala, FuncionarioFixo } from "./classes/FuncionarioFixo";
import { FuncionarioHorista } from "./classes/FuncionarioHorista";

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


 const joao = new FuncionarioHorista(
  60, 
  {inicio: new Date("2024-01-01"), fim: new Date("2024-03-01")},
  "João",
  "Desenvolvedor",
  0
)

joao.setHorasTrabalhadas(100)
joao.setHorasTrabalhadas(200)


const microsoft = new Empresa("Microsoft", "123456789")

microsoft.contratarFuncionario(henrique)
microsoft.contratarFuncionario(joao)

microsoft.demitirFuncionario(henrique)

console.log(joao.getDiasTrabalhados())




