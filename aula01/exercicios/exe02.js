"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var p1 = Number(rs.question('Digite a primeira nota: '));
var p2 = Number(rs.question('Digite a segunda nota: '));
var p3 = Number(rs.question('Digite a terceira nota: '));
var mediaPonderada = p1 * 0.2 + p2 * 0.3 + p3 * 0.5;
console.log("Sua media \u00E9: ".concat(mediaPonderada));
