document.addEventListener("keydown", keyDown, false);
var userVal = 0;

function keyDown(e) 
{
	if (e.keyCode == 13)
	{
		// enter
		Bricks.forEach(function(brick) {
			if (!brick.solved && userVal == brick.value)
			{
				//alert("solved !");
				brick.solved = true;
				createNewBrick();
			}
		});
		userVal = 0;
	}
	else
	{
		var val = 0;
		if (e.keyCode >= 48 && e.keyCode <= 57)
		{
			// Numbers (not numpad)
			// 0 => 48
			// ...
			// 9 => 57
			val = e.keyCode - 48;
		}
		else if (e.keyCode >= 96 && e.keyCode <= 105)
		{
			// Numbers (numpad)
			// 0 => 96
			// ...
			// 9 => 105
			val = e.keyCode - 96;
		}
		else
			return;
			
		var currentValString = userVal.toString();
		currentValString = currentValString + val.toString();
		userVal = parseInt(currentValString);
	}
}
