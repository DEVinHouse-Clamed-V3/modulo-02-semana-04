import Funcionario from "./classes/Funcionario";

const joao = new Funcionario(
  "João",
  new Date("2021-01-01"),
  "Desenvolvedor",
  5000,
);

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
