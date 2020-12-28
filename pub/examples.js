
addEventListener("DOMContentLoaded", ()=>{
	const bg = new BackgroundGenerator();
	
	// Parameters -> (text-color, background-color, pixelsBounce, animationSpeed)
	bg.wavyText("#000", "#fff", 20, 1.25);
	bg.eyesMotion();
	bg.cardAnimation();
	bg.starMouseTrail();
	// bg.imageSlider();
	// bg.starMouseTrail();
	// bg.rippleButton();
	// bg.addBubbles();
	// bg.iconsBackground();
});