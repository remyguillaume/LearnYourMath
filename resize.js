window.addEventListener("resize", resizeCanvas, false);
			
function resizeCanvas() 
{
	if (window.innerWidth > 600)
		canvas.width = 600;
	else
		canvas.width = window.innerWidth;
	
	canvas.height = window.innerHeight - 100;
	
	Brick.prototype.maxHeight = canvas.height;
	Brick.prototype.maxWidth = canvas.width;
}
