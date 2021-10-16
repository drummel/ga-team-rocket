tool.fixedDistance = 30;
var layer = project.activeLayer;
var hue;
var brightness;
var saturation;
var canvas = document.getElementById("myCanvas");

var HUE_MIN = 0;
var HUE_MAX = 360;

var SATURATION_MIN = 0.92;
var SATURATION_MAX = 1.00;

var BRIGHTNESS_MIN = 0.51;
var BRIGHTNESS_MAX = 0.85; 

// Return a random floating point number within a range
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function usePrimaryMotif() {
  HUE_MIN = 0;
  HUE_MAX = 360;
  SATURATION_MIN = 0.92;
  SATURATION_MAX = 1.0;
  BRIGHTNESS_MIN = 0.51;
  BRIGHTNESS_MAX = .85; 
}
function useMarshmallowMotif() {
  HUE_MIN = 0;
  HUE_MAX = 360;
  SATURATION_MIN = 0.10;
  SATURATION_MAX = 0.30;
  BRIGHTNESS_MIN = 0.95;
  BRIGHTNESS_MAX = 1.00; 
}
function useClaypotMotif() {
  HUE_MIN = 109;
  HUE_MAX = 0;
  SATURATION_MIN = 0.06;
  SATURATION_MAX = .22;
  BRIGHTNESS_MIN = 0.16;
  BRIGHTNESS_MAX = 1; 
}
function usePurpleraintMotif() {
  HUE_MIN = 242;
  HUE_MAX = 313;
  SATURATION_MIN = 0.65;
  SATURATION_MAX = 0.7;
  BRIGHTNESS_MIN = 0.34;
  BRIGHTNESS_MAX = 0.46; 
}

function getRadomPalette() {
  i=Math.random() * 4;
  i = 3.5
  if (i < 1){
    usePrimaryMotif() 
  } else if (i < 2) {
    useMarshmallowMotif()
  } else if (i < 3) {
    useClaypotMotif()
  } else {
    usePurpleraintMotif()
  }
}

function getRandomColor() {
  hue = randomInRange(HUE_MIN, HUE_MAX);
  brightness = randomInRange(BRIGHTNESS_MIN, BRIGHTNESS_MAX);
  saturation = randomInRange(SATURATION_MIN, SATURATION_MAX);

  // 1 out of 5 times turn the britness way down by a factor of 10
  if (Math.random() < 0.33) {
    brightness = brightness * 0.25;
  }
}
getRadomPalette();
getRandomColor();
canvas.addEventListener("click", getRandomColor)


function onMouseMove(event) {
  var path = new Path.Circle({
		center: event.middlePoint,
		radius: Math.floor(Math.random() * 30) + 5
	})
  console.log(event.count)
  path.fillColor = {
    hue: hue,
    saturation: saturation,
    brightness: brightness
  }
}
