function initialize() {
	resizeCanvas();

	// Create bricks
	createNewBrick();
	createNewBrick();
	
	setInterval(refresh, 10);
}
