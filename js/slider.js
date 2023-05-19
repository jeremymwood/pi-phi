'use strict';

const lowerSlider = document.querySelector("#lowerSlider");
const upperSlider = document.querySelector("#upperSlider");
const lowerOutput = document.querySelector(".lower-output");
const upperOutput = document.querySelector(".upperOutput");

lowerOutput.textContent = lowerSlider.value;
upperOutput.textContent = upperSlider.value;

lowerSlider.addEventListener("input", function () {
    lowerOutput.textContent = lowerSlider.value;
    updateLimits();
});
upperSlider.addEventListener("input", function () {
    upperOutput.textContent = upperSlider.value;
    updateLimits();
});
