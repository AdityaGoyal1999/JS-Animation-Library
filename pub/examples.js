
addEventListener("DOMContentLoaded", ()=>{
	const bg = new BackgroundGenerator();
	
	// Parameters -> (text-color, background-color, pixelsBounce, animationSpeed)
	bg.wavyText("#000", "#fff", 20, 1.25);
	// Parameters -> (backgroundColor, eyeColor, eyeLashColor)
	bg.eyesMotion("rgb(234, 195, 135)", "rgb(110, 72, 39)", "rgb(204, 175, 115)");
	bg.cardAnimation();
	bg.starMouseTrail();
	bg.imageSlider();
	// bg.starMouseTrail();
	// bg.rippleButton();
	// bg.addBubbles();
	// bg.iconsBackground();
});