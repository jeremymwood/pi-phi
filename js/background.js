const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
        ,(m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1).match(/.{2}/g)
        .map(x => parseInt(x, 16))

let lightOrange = getComputedStyle(document.documentElement).getPropertyValue("--light-orange");
let mediumOrange = getComputedStyle(document.documentElement).getPropertyValue("--medium-orange");
let darkOrange = getComputedStyle(document.documentElement).getPropertyValue("--dark-orange");
let secondaryOrange = getComputedStyle(document.documentElement).getPropertyValue("--secondary-orange");

let colors = new Array(
    hexToRgb(lightOrange.trim()),
    hexToRgb(mediumOrange.trim()),
    hexToRgb(darkOrange.trim()),
    hexToRgb(secondaryOrange.trim()));

let step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
let colorIndices = [0,1,2,3];
let opacity = 0.55;

//transition speed
let gradientSpeed = 0.005;

function updateGradient()
{

    if ( $===undefined ) return;

    let c0_0 = colors[colorIndices[0]];
    let c0_1 = colors[colorIndices[1]];
    let c1_0 = colors[colorIndices[2]];
    let c1_1 = colors[colorIndices[3]];

    let istep = 1 - step;
    let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    let color1 = "rgba("+r1+","+g1+","+b1+","+opacity+")";

    let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]) ;
    let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    let color2 = "rgba("+r2+","+g2+","+b2+","+opacity+")";

    $('.circle').css({
        background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
        background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

    // $('.notification').css({
    //     background: "-webkit-gradient(linear, left top, right top, from("+color2+"), to("+color1+"))"}).css({
    //     background: "-moz-linear-gradient(left, "+color2+" 0%, "+color1+" 100%)"}).css({"-webkit-background-clip" : "text"}).css({"-webkit-text-fill-color" : "transparent"});

    step += gradientSpeed;
    if ( step >= 1 )
    {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}

setInterval(updateGradient,30);