var drawColor = 'black';
var drawSize = '35';

// Set up cannot be named differently, constructs canvas
function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(500);
}

// draw cannot be named differently, will be called in a loop
function draw() {
  	//console.log(drawColor);
	if (mouseIsPressed) {
		stroke(drawColor);
		fill(drawColor);
		ellipse(mouseX, mouseY, drawSize, drawSize);	
		//console.log(drawColor);
	}
}

$(document).ready(function() {
	$('#black').click(function() {
		drawColor = 'black';
		console.log(drawColor);
	});
	
	$('#blue').click(function() {
		drawColor = 'blue';
		console.log(drawColor);

	});

	$('#red').click(function() {
		drawColor = 'red';
		console.log(drawColor);

	});

	$('#yellow').click(function() {
		drawColor = 'yellow';
		console.log(drawColor);

	});

	$('#eraser').click(function() {
		drawColor = 'white';
		console.log(drawColor);

	});

	$('#small').click(function() {
	drawSize = '20';
	console.log(drawSize);

	});

	$('#medium').click(function() {
	drawSize = '35';
	console.log(drawSize);

	});

	$('#large').click(function() {
	drawSize = '50';
	console.log(drawSize);

	});
});

	// function flower() {
	//   stroke(255);
	//   fill(255, 0, 100, 255);
	//   translate(mouseX, mouseY);
	//   for (var i = 0; i < 6; i++) {
	//     ellipse(0, 0, 20, 80);
	//     rotate(PI/6);
	//   }
	// }