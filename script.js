tool.fixedDistance = 30;
var layer = project.activeLayer;
var hue;
var brightness;
var saturation;
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');
var paperScope = PaperScope.get(1);
paperScope.activate();

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

function useMarshmallowMotif() {
  HUE_MIN = 0;
  HUE_MAX = 360;
  SATURATION_MIN = 0.10;
  SATURATION_MAX = 0.30;
  BRIGHTNESS_MIN = 0.95;
  BRIGHTNESS_MAX = 1.00; 
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
useMarshmallowMotif();
getRandomColor();
canvas.addEventListener("click", getRandomColor)


function onMouseMove(event) {
  var path = new Path.Circle({
		center: event.middlePoint,
		radius: Math.floor(Math.random() * 30) + 5
	})
  path.fillColor = {
    hue: hue,
    saturation: saturation,
    brightness: brightness
  }
}

function clearCanvas() {
  paperScope.project.clear();
}
var clearButton = document.getElementById('clear');
clearButton.addEventListener("click", clearCanvas);