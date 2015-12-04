var timer ;
var initialRefreshTime = 100;
var possibleOperators;

function initialize() {

	resetGame();

	Brick.prototype.maxHeight = canvas.height;
	Brick.prototype.maxWidth = canvas.width;
	
	possibleOperators = [];
	if (document.getElementById("additions").checked)
		possibleOperators.push("+");
	if (document.getElementById("soustractions").checked)
		possibleOperators.push("-");
	
	maxValue = document.getElementById("maxVal").value;
	
	// Create bricks
	createNewBrick();
	createNewBrick();
	
	if (timer != null)
		clearInterval(timer);
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
	document.getElementById("sc").innerHTML = level-1;
	clearInterval(timer);
	timer = setInterval(refresh, initialRefreshTime-(level*3));
}

function resetGame() {
	
	context.beginPath();
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.closePath();
	
	Bricks = [];
	level = 1;
	generateLeft = true;
	
	document.getElementById("sc").innerHTML = 0;
}
