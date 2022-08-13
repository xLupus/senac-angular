import * as rs from 'readline-sync';

let p1: number = Number(rs.question('Digite a primeira nota: '));
let p2: number = Number(rs.question('Digite a segunda nota: '));
let p3: number = Number(rs.question('Digite a terceira nota: '));

let mediaPonderada: number = p1 * 0.2 + p2 * 0.3 + p3 * 0.5;

console.log(`Sua media é: ${mediaPonderada}`);