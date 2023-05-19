'use strict';

const measuredWidth = 84.3;
const master = Math.sqrt(6) / 2;
// const master = (1 + Math.sqrt(5)) / 2;
console.log(master);
const constant = (measuredWidth / 2.25).toFixed(4);

const rangeMachina = (begin, end, interval) =>
    Array.from(
        { length: (end - begin) / interval + 1 },
        (value, index) => begin + index * interval
    );
let lowerLimit = -14;
let upperLimit = 5;
let interval = 1;
let min = -20;
let max = 20;
let range = rangeMachina(lowerLimit, upperLimit, interval);
let calcUR;
let calcU;
let diameter;
let radius;

//generate circles within range
function circleMachina(range) {
    for (let i = range.length -1; i >= 0; i--) {

        calcUR = (master ** range[i]).toFixed(4);
        calcU = (calcUR * 2).toFixed(4);
        diameter = (calcUR * constant).toFixed(2);
        radius = ((calcUR * constant) / 2).toFixed(2);

        let circleId = `c${range[i]}`;
        let newCircle = $('<div class="circle d-flex flex-column m-1"></div>');
        newCircle.attr('id', circleId);
        if (range[i] > 1) {
            newCircle.append(`
            <div class="mt-auto mx-auto">n = ${range[i]}</div>
            <div class="mb-auto mx-auto">${diameter}</div>
            `);
        };

        // let newCircleAnno = $(`<div class="m-auto">n = ${range[i]}</div>`);
        // if (range[i] > 0) {
        //     $(newCircle).append(newCircleAnno);
        // };

        $('#circles').append(newCircle);
        $(newCircle).css("height", parseFloat(diameter));
        $(newCircle).css("width", parseFloat(diameter));
    }
}
//init circles
circleMachina(range);

//print initial limits
$(`.lowerValue`).text(lowerLimit);
$(`.upperValue`).text(upperLimit);

//hover color
$('.fa-solid').hover(function() {
    $(this).css("color", "var(--medium-orange");
});

$('.fa-solid').mouseleave(function() {
    $(this).css("color", "");
});

function updateLimits() {
    lowerLimit = parseInt($(`.lowerValue`).text());
    upperLimit = parseInt($(`.upperValue`).text());
};

let newLimit;
// function increment() {
//     updateLimits();
//     newLimit = parseInt($(this).siblings("h2").find("span").text()) + 1;
//     $(this).siblings("h2").find("span").text(newLimit);
//     updateLimits();
//     range = rangeMachina(lowerLimit, upperLimit, 1);
// };
// function decrement() {
//     updateLimits();
//     newLimit = parseInt($(this).siblings("h2").find("span").text()) - 1;
//     $(this).siblings("h2").find("span").text(newLimit);
//     updateLimits();
//     range = rangeMachina(lowerLimit, upperLimit, 1);
// };
function mirrorSlider() {
    $('#lowerSlider').attr("value", lowerLimit);
    $('#upperSlider').attr("value", upperLimit);
    lowerOutput.textContent = lowerSlider.value;
    upperOutput.textContent = upperSlider.value;
};
function updateCircles() {
    $(`#circles`).text("");
    circleMachina(range);
};

//increment lower
$('.fa-caret-up.lowerMarker').mousedown(function() {
    updateLimits();
    newLimit = parseInt($(this).siblings("h2").find("span").text()) + 1;
    $(this).siblings("h2").find("span").text(newLimit);
    updateLimits();
    range = rangeMachina(lowerLimit, upperLimit, 1);
    // increment();
    mirrorSlider();
    updateCircles();
});
//decrement lower
$('.fa-caret-down.lowerMarker').mousedown(function() {
    updateLimits();
    newLimit = parseInt($(this).siblings("h2").find("span").text()) - 1;
    $(this).siblings("h2").find("span").text(newLimit);
    updateLimits();
    range = rangeMachina(lowerLimit, upperLimit, 1);
    // decrement();
    mirrorSlider();
    updateCircles();
});
//increment upper
$('.fa-caret-up.upperMarker').mousedown(function() {
    updateLimits();
    newLimit = parseInt($(this).siblings("h2").find("span").text()) + 1;
    $(this).siblings("h2").find("span").text(newLimit);
    updateLimits();
    range = rangeMachina(lowerLimit, upperLimit, 1);
    // increment();
    mirrorSlider();
    updateCircles();
});

//decrement upper
$('.fa-caret-down.upperMarker').mousedown(function() {
    updateLimits();
    newLimit = parseInt($(this).siblings("h2").find("span").text()) - 1;
    $(this).siblings("h2").find("span").text(newLimit);
    updateLimits();
    range = rangeMachina(lowerLimit, upperLimit, 1);
    // decrement();
    mirrorSlider();
    updateCircles();
});