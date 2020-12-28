
addEventListener("DOMContentLoaded", ()=>{
	const bg = new BackgroundGenerator();
	
	// Parameters -> (text-color, background-color, pixelsBounce, animationSpeed)
	bg.wavyText("#000", "#fff", 20, 1.25);
	// Parameters -> (backgroundColor, eyeColor, eyeLashColor)
	bg.eyesMotion("rgb(234, 195, 135)", "rgb(110, 72, 39)", "rgb(204, 175, 115)");
	// Parameters -> (cardWidth, cardHeight, cardColor)
	bg.cardAnimation("275px", "325px", "rgb(238, 239, 240)");
	// Parameters -> (starWidth, starHeight, backgroundColor, mouseTrailLength)
	bg.starMouseTrail("40", "40", "#000", 100);
	// Parameters -> (backgroundColor, backgroundWidth, backgroundHeight, movementSpeed, direction)
	bg.backgroundMove("rgb(64, 224, 208)", "700px", "500px", 0.125, -1);
});