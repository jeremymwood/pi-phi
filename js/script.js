'use strict';

const measuredWidth = 84.3;
const r = 4;
const master = Math.sqrt(6) / 2;
const calcUR = (master ** 4).toFixed(2);
const calcU = (calcUR * 2).toFixed(2);
const constant = (measuredWidth / calcUR).toFixed(4);
const diameter = (calcUR * constant).toFixed(2);
const radius = ((calcUR * constant) / 2).toFixed(2);

console.log("constant: " + constant);
console.log("master: " + master);
console.log("calcUR: " + calcUR);
console.log("calcU: " + calcU);
console.log("diameter: " + diameter);
console.log("radius: " + radius);

$(document).ready(function () {
    $("#circle").css("height", diameter);
    $("#circle").css("width", diameter);
});

