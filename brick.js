var Bricks = [];
var level = 1;

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
		alert("GAME OVER !!");
		this.solved = true;
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
	var left = Math.floor((Math.random() * (Brick.prototype.maxWidth - 100)) + 1);
	var o1 = Math.floor((Math.random() * 10));
	var o2 = Math.floor((Math.random() * 10));
	var op = "+";
	if (Math.random() < 0.5)
		op = "-";
		
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
	var calcul = o1.toString() + " " + op + " " + o2.toString();
	var value = o1 + o2;
	if (op == "-")
		value = o1 - o2;
	
	// 16777215
	var randomcolor = Math.floor(Math.random()*8388607);
	var bgColor = '#'+randomcolor.toString(16);
	randomcolor = 8388607 + randomcolor;
	var textColor = '#'+randomcolor.toString(16);
	
	Bricks.push(new Brick(left, calcul, value, bgColor, textColor));
}