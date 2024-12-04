import Funcionario from "./classes/Funcionario";
import { Escala, FuncionarioFixo } from "./classes/FuncionarioFixo";

const joao = new Funcionario(
  "João",
  new Date("2021-01-01"),
  "Desenvolvedor",
  5000,
);

joao.setDataFerias(new Date("2025-01-01"));

const ana = new Funcionario(
  "Ana",
  new Date("2021-01-01"),
  "Desenvolvedor",
  5000,
  new Date("1990-01-01"),
  "Rua 1",
  "85991999999",
  "h@gmail.com",
  new Date("2025-01-01"),
);

const pedrinho = new FuncionarioFixo(
  Escala.CincoPorDois,
  "Pedrinho",
  new Date("2021-01-01"),
  "Desenvolvedor",
  5000,
);

pedrinho.setDataFerias(new Date("2025-01-01"));
