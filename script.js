tool.fixedDistance = 30;
var layer = project.activeLayer;
var  hue = 90;
var canvas = document.getElementById("myCanvas")
canvas.addEventListener("click", getRandomColor)

function getRandomColor() {
 
  hue = 7 
}
 
 


function onMouseMove(event) {
  var path = new Path.Circle({
		center: event.middlePoint,
		radius: Math.floor(Math.random() * 30) + 5
	})
  console.log(event.count)
  path.fillColor = {
    hue: hue,
    saturation: 1,
    brightness: 1
  }
}
