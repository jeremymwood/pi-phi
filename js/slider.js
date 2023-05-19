'use strict';

const lowerSlider = document.querySelector("#lowerSlider");
const upperSlider = document.querySelector("#upperSlider");
const lowerOutput = document.querySelector(".lower-output");
const upperOutput = document.querySelector(".upperOutput");


$('#lowerSlider').attr("step", interval).attr("min", min).attr("max", max).attr("value", lowerLimit);
$('#upperSlider').attr("step", interval).attr("min", min).attr("max", max).attr("value", upperLimit);

lowerOutput.textContent = lowerSlider.value;
upperOutput.textContent = upperSlider.value;

// function mirrorSliderLimits() {
//     lowerLimit = parseInt($(`.lowerSlider`).text());
//     upperLimit = parseInt($(`.upperSlider`).text());
// };

lowerSlider.addEventListener("input", function () {
    // mirrorSliderLimits();
    //
    // newLimit = parseInt($(this).siblings("h2").find("span").text()) + 1;
    // $(this).siblings("h2").find("span").text(newLimit);
    // mirrorSliderLimits();
    // range = rangeMachina(lowerLimit, upperLimit, 1);
    // // increment();
    // mirrorSlider();
    // updateCircles();
    lowerOutput.textContent = lowerSlider.value;
});

upperSlider.addEventListener("input", function () {
    upperOutput.textContent = upperSlider.value;
});