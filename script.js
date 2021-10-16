tool.fixedDistance = 30;
var layer = project.activeLayer;
var hue;
var brightness;
var saturation;
var canvas = document.getElementById("myCanvas");
var backgroundchange = document.getElementById ("option-a")

var HUE_MIN = 0;
var HUE_MAX = 360;
// const HUE_ROTATION_MIN = 10;
// const HUE_ROTATION_MAX = 60;

var SATURATION_MIN = 0.92;
var SATURATION_MAX = 1.00;

var BRIGHTNESS_MIN = 0.51;
var BRIGHTNESS_MAX = 0.85;

// Return a random floating point number within a range
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
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

function backgroundcolorchange(){
  console.log("heyhey")
canvas.style.background = getRandomColor2();

}

function getRandomColor2 () {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i <6; i++){
    color += letters[Math.floor(Math.random() *16)];
  }
  return color;
}

backgroundchange.addEventListener ("click", backgroundcolorchange)
