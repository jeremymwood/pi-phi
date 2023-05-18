'use strict';

const measuredWidth = 84.3;
const master = Math.sqrt(6) / 2;
const constant = (measuredWidth / 2.25).toFixed(4);

const rangeMachina = (begin, end, interval) =>
    Array.from(
        { length: (end - begin) / interval + 1 },
        (value, index) => begin + index * interval
    );
let lowerLimit = -14;
let upperLimit = 10;
let range = rangeMachina(lowerLimit, upperLimit, 1);

let calcUR;
let calcU;
let diameter;
let radius;

function circleMachina() {
    for (let i = range.length -1; i >= 0; i--) {

        calcUR = (master ** range[i]).toFixed(4);
        calcU = (calcUR * 2).toFixed(4);
        diameter = (calcUR * constant).toFixed(2);
        radius = ((calcUR * constant) / 2).toFixed(2);

        let print = () => {
            console.log(`calcUR: ${calcUR}`);
            console.log(`calcU: ${calcU}`);
            console.log(`radius: ${radius}`);
            console.log(`diameter: ${diameter}`);
            console.log(parseFloat(diameter));
            console.log();
        };
        print();

        let circleId = `c${range[i]}`;
        let newCircle = $('<div class="circle m-1"></div>');
        newCircle.attr('id', circleId);
        // console.log(newCircle)
        // addClass(`${range[i]}`)
        $('#circles').append(newCircle);
        $(newCircle).css("height", parseFloat(diameter));
        $(newCircle).css("width", parseFloat(diameter));
    }
}

$(document).ready(function () {
    $(`<p>Lower Limit: ${lowerLimit}</p>`).appendTo('.lowerLimit');
    $(`<p>Upper Limit: ${upperLimit}</p>`).appendTo('.upperLimit');
    circleMachina();
});

// circleMachina();

// console.log("constant: " + constant);
// console.log("master: " + master);
// console.log("calcUR: " + calcUR);
// console.log("calcU: " + calcU);
// console.log("diameter: " + diameter);
// console.log("radius: " + radius);

