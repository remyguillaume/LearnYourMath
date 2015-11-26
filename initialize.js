function initialize() {

	resizeCanvas();

	// Create bricks
	createNewBrick();
	createNewBrick();
	
	setInterval(refresh, 10);
}

function refresh()
{
	Bricks.forEach(
		function(brick) { 
			brick.draw(context);
	});
}
