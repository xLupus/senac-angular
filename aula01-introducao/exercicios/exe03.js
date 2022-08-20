"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var base = Number(rs.question('Digite a base: '));
var altura = Number(rs.question('Digite a altura: '));
var area = base * altura / 2;
console.log("A base do seu Triangulo \u00E9: ".concat(area));
