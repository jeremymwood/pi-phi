'use strict';

const lowerSlider = document.querySelector("#lowerSlider");
const upperSlider = document.querySelector("#upperSlider");
const lowerOutput = document.querySelector(".lower-output");
const upperOutput = document.querySelector(".upperOutput");


$('#lowerSlider').attr("step", interval).attr("min", min).attr("max", max).attr("value", lowerLimit);
$('#upperSlider').attr("step", interval).attr("min", min).attr("max", max).attr("value", upperLimit);

lowerOutput.textContent = lowerSlider.value;
upperOutput.textContent = upperSlider.value;

lowerSlider.addEventListener("input", function () {
    lowerOutput.textContent = lowerSlider.value;
});

upperSlider.addEventListener("input", function () {
    upperOutput.textContent = upperSlider.value;
});