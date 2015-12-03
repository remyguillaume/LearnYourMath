var timer ;
var initialRefreshTime = 100;

function initialize() {

	resizeCanvas();

	// Create bricks
	createNewBrick();
	createNewBrick();
	
	timer = setInterval(refresh, initialRefreshTime);
}

function refresh()
{
	Bricks.forEach(
		function(brick) { 
			brick.draw(context);
	});
}

function increaseLevel() {
	level++;
	clearInterval(timer);
	timer = setInterval(refresh, initialRefreshTime-(level*3));
}
