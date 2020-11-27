
function BackgroundGenerator(){

}

function bubbles(){
		const body = document.querySelector('body');
		const createElement = document.createElement('span');
		createElement.style = "position: aboslute; bottom:-50px; background:trransparent;border-radius:50%;pointer-events:none;box-shadow:inset  0 0 10px rgba(255, 255, 255, 0.5);"
		let size = Math.random() * 60;

		createElement.style.width = size + 'px';
		createElement.style.height = size + 'px';
		createElement.style.left = Math.random() * innerWidth + 'px';
		body.appendChild(createElement);
		setTimeout(() => {
			createElement.remove()
		}, 5000)	
	}

BackgroundGenerator.prototype = {

	addSimpleBackground: function(){
		const body = document.querySelector("body");
		console.log("Giving");
		console.log(body);
		body.style = "background-color: aqua";
	},

	addBubbles: function(){
		setInterval(bubbles, 50);
	}
}

// let ballsArray;

// class Ball{
// 	constructor(x, y, directionX, directionY, size, color){

// 		this.x = x;
// 		this.y = y;
// 		this.directionX = directionX;
// 		this.directionY = directionY;
// 		this.size = size;
// 		this.color = color;
// 	}

// 	draw(){
// 		ctx.beginPath();
// 		ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
// 		ctx.fillStyle = '#8C5523';
// 		ctx.fill();
// 	}

// 	update(){
// 		if(this.x > canvas.width || this.x<0){
// 			this.direcitonX = -this.directionX;
// 		}
// 		if(this.y > canvas.height || this.y < 0){
// 			this.directionY = -this.directionY;
// 		}

// 		this.x += this.directionX;
// 		this.y += this.directionY;
// 		this.draw();
// 	}


// 	animate(){
// 		requestAnimationFrame(animate);
// 		ctx.clearRect(0, 0, innerWidth, innerHeight);

// 		for(let i = 0; i < ballsArray.length; i++){
// 			ballsArray[i].update();
// 		}
// 	}

// 	create(){
// 		this.initialize();
// 		this.animate();
// 	}
// }
