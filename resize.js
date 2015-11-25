window.addEventListener("resize", resizeCanvas, false);
			
function resizeCanvas() 
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	Brick.prototype.maxHeight = canvas.height;
}
