import { inss } from "./operacoes";

function soma(a: number, b: number) {
  const resultado = a + b;
  return resultado;
}

function f(a: number, c: number,b?: number) {}

const showMessage = (message: string) => {};

function makeOperations(a: number, b: number) {
  const soma = a + b;
  const multiplicacao = a * b;
  const divisao = a / b;

  return { soma, multiplicacao, divisao };
}

function calcularAreaRetangulo(base: number, altura: number) {
  const alturaBaseDoTriangulo = 10.5;
  return (base * altura) / alturaBaseDoTriangulo;
}

const pessoa = {
  nome: "Fulano",
  idade: 30,
  email: "h@mail.com",
};

console.log(pessoa.nome);
