export function inss(salario: number) {
  let inss = 0;
  if (salario <= 1693.72) {
    inss = salario * 0.08;
  } else if (salario <= 2822.9) {
    inss = salario * 0.09;
  } else if (salario <= 5645.8) {
    inss = salario * 0.11;
  } else {
    inss = 621.04;
  }

  return inss;
}
