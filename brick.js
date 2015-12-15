var Bricks;
var level;
var maxValue;
var generateLeft;

function Brick(left, calcul, value, bgColor, textColor) {
	this.width = 100;
	this.height = 30;
	this.left = left;
	this.top = 0;
	this.bgColor = bgColor;
	this.textColor = textColor;
	this.calcul = calcul;
	this.value = value;
	this.solved = false;
};

Brick.prototype.draw = function(context) {
	
	if (!this.solved && this.top + this.height > this.maxHeight)
	{
		alert("Partie terminée !\r\nBravo, vous avez obtenu " + (level-1) + " points ! ");
		clearInterval(timer);
		return;
	}

	context.beginPath();
	// Clear
	context.clearRect(this.left, this.top, this.width, this.height);
	if (this.solved)
		return;
	
	// Draw background
	this.top = this.top + 1;
	context.rect(this.left, this.top, this.width, this.height);
	context.fillStyle = this.bgColor;
	context.fill();
	
	// Add text
	context.fillStyle = this.textColor;
	context.font = "20px arial";
	context.textAlign = "center";
	context.fillText(this.calcul, this.width/2 + this.left, this.height/4*3 + this.top);
	context.closePath();
}

function createNewBrick() {
	var left;
	if (generateLeft)
		left = Math.floor((Math.random() * (Brick.prototype.maxWidth/2 - 100)) + 1);
	else
		left = Math.floor((Math.random() * (Brick.prototype.maxWidth/2 - 100)) + Brick.prototype.maxWidth/2);
	generateLeft = !generateLeft;

	// Random operator
	var i = Math.floor(Math.random() * possibleOperators.length);
	var op = possibleOperators[i];
	
	// Random operandes
	var o1, o2;
	if (op == "x")
	{
		// Get random number for multiplications
		var j = Math.floor(Math.random() * possibleMultiplications.length);
		o1 = possibleMultiplications[j];
		o2 = Math.floor(Math.random() * 10);
	}
	else
	{
		// Get random numbers for additions/subtractions
		o1 = Math.floor(Math.random() * maxValue+1);
		o2 = Math.floor(Math.random() * maxValue+1);
		
		if (op == "-")
		{
			// Bigger number sould come firt
			if (o1 < o2)
			{
				var o3 = o1;
				o1 = o2;
				o2 = o3;
			}
		}
	}
		
	var calcul = o1.toString() + " " + op + " " + o2.toString();
	var value;
	switch (op)
	{
		case "+":
			value = o1 + o2;
			break;
		case "-":
			value = o1 - o2;
			break;
		case "x":
			value = o1 * o2;
			break;
	}
	
	// 16777215 - 8388607
	var randomcolor = Math.floor(Math.random()*16777215);
	var bgColor = '#'+('000000'+randomcolor.toString(16)).slice(-6);
	var textColor = "#000";
	if (randomcolor < 8388607)
		textColor = "#FFF";
	
	Bricks.push(new Brick(left, calcul, value, bgColor, textColor));
}