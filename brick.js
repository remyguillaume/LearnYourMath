var Bricks = [];

function Brick(left, calcul, value, color) {
	this.width = 100;
	this.height = 30;
	this.left = left;
	this.top = 10;
	this.bgColor = color;
	this.calcul = calcul;
	this.value = value;
	this.solved = false;
};

Brick.prototype.draw = function(context) {
	
	if (!this.solved && this.top + this.height > this.maxHeight)
	{
		alert("GAME OVER !!");
		this.top = 10;
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
	context.fillStyle = "#000";
	context.font = "20px arial";
	context.textAlign = "center";
	context.fillText(this.calcul, this.width/2 + this.left, this.height/4*3 + this.top);
	context.closePath();
}

function createNewBrick() {
	var left = Math.floor((Math.random() * 700) + 1);
	var o1 = Math.floor((Math.random() * 10));
	var o2 = Math.floor((Math.random() * 10));
	var op = "+";
	if (Math.random() < 0.5);
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
	
	var color = "#f00";
	
	Bricks.push(new Brick(left, calcul, value, color));
}