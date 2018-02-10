var clearButton = document.getElementsByName("clear")[0];
var toggleButton = document.getElementsByName("toggle")[0];
var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
var shapeSwitch = true;

var getShapeName = function() {
    if(shapeSwitch == true){
	return "rectangle"; }
    else {
	return "circle";}
};

canvas.addEventListener("click", function(evt) {
    var x = evt.offsetX;
    var y = evt.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
    if(shapeSwitch) {
        ctx.rect(x-10, y-10, 20, 20);
    }
    else {
        ctx.arc(x, y, 10, 0, 2*Math.PI);
    }
    ctx.moveTo(x, y);
    ctx.fill();
});

toggleButton.addEventListener("click", function() {
    shapeSwitch = !shapeSwitch;
});

clearButton.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
});
