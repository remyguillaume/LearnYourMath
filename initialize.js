var timer ;
var initialRefreshTime = 100;
var possibleOperators;
var possibleMultiplications;

function initialize() {

	resetGame();

	Brick.prototype.maxHeight = canvas.height;
	Brick.prototype.maxWidth = canvas.width;
	
	possibleOperators = [];
	if (document.getElementById("additions").checked)
		possibleOperators.push("+");
	if (document.getElementById("soustractions").checked)
		possibleOperators.push("-");
	if (document.getElementById("multiplications").checked)
	{
		possibleOperators.push("x");
		possibleMultiplications = [];
		
		for (i=1; i<=10; i++)
		{
			var id = "m" + i;
			if (document.getElementById(id).checked)
				possibleMultiplications.push(i);
		}
	}
	
	maxValue = document.getElementById("maxVal").value;
	
	// Create bricks
	createNewBrick();
	createNewBrick();
	
	if (timer != null)
		clearInterval(timer);
	timer = setInterval(refresh, initialRefreshTime);
	
	// Force focus out of the button (otherwise "enter" will restart a new game)
	document.getElementById("can").focus();
}

function refresh()
{
	Bricks.forEach(
		function(brick) { 
			brick.draw(context);
	});
}

function increaseLevel() {
	if (level < 30)
	{
		level++;
		document.getElementById("sc").innerHTML = level-1;
		clearInterval(timer);
		timer = setInterval(refresh, initialRefreshTime-(level*3));
	}
	// Otherwise the game becomes to speedy !
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
