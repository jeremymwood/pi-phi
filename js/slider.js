'use strict';

const lowerSlider = document.querySelector("#lowerSlider");
const upperSlider = document.querySelector("#upperSlider");
const lowerOutput = document.querySelector(".lower-output");
const output2 = document.querySelector(".upperOutput");

lowerOutput.textContent = lowerSlider.value;
output2.textContent = upperSlider.value;

lowerSlider.addEventListener("input", function () {
    lowerOutput.textContent = lowerSlider.value;
});
upperSlider.addEventListener("input", function () {
    output2.textContent = upperSlider.value;
});
