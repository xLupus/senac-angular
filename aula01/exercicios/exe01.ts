import * as rs from 'readline-sync';

let num1: string = rs.question('Digite o primeiro numero: ');
let num2: string = rs.question('Digite o segundo numero: ');
let num3: string = rs.question('Digite o terceiro numero: ');

let resultado: number = Number(num1) * Number(num2) * Number(num3);

console.log(resultado);
