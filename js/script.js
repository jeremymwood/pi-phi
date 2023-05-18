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

circleMachina();

let $button = $('.increment-btn');
let $counter = $('.counter');

$button.click(function(){
    $counter.val( parseInt($counter.val()) + 1 ); // `parseInt` converts the `value` from a string to a number
});

$(`.lowerValue`).text(lowerLimit);
$(`.upperValue`).text(upperLimit);

$('.fa-solid').hover(function() {
    $(this).css("color", "var(--medium-orange");
});

$('.fa-solid').mouseleave(function() {
    $(this).css("color", "");
});

$('.fa-caret-down').click(function() {
    lowerLimit = parseInt($(this).siblings("h1").find("span").text()) - 1;
    $(this).siblings("h1").find('span').text(lowerLimit);
});

$('.fa-caret-up').click(function() {
    upperLimit = parseInt($(this).siblings("h1").find("span").text()) + 1;
    $(this).siblings("h1").find('span').text(upperLimit);
});


// console.log("constant: " + constant);
// console.log("master: " + master);
// console.log("calcUR: " + calcUR);
// console.log("calcU: " + calcU);
// console.log("diameter: " + diameter);
// console.log("radius: " + radius);

