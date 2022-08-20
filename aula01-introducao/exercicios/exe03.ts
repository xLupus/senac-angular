import * as rs from 'readline-sync';

let base: number = Number(rs.question('Digite a base: '));
let altura: number = Number(rs.question('Digite a altura: '));

let area = base * altura / 2;

console.log(`A base do seu Triangulo é: ${area}`);