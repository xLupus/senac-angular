"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var num1 = rs.question('Digite o primeiro numero');
var num2 = rs.question('Digite o segundo numero');
var num3 = rs.question('Digite o terceiro numero');
var resultado = Number(num1) * Number(num2) * Number(num3);
console.log(resultado);
