


function BackgroundGenerator(){

}


class Particle{
	constructor(x, y, size, color, weight, canvas, ctx, mouse){
		this.x = x;
		this.y = y;
		this.size = size;
		this.color;
		this.weight;
		this.canvas = canvas;
		this.ctx = ctx;
		this.mouse = mouse;
	}

	draw(){
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
	}

	update(){
		this.size -= 0.05;
		if(this.size < 0){
			this.x = (this.mouse.x +((Math.random() * 20) - 10));
			this.y = (this.mouse.y + ((Math.random() * 20) -10));
			this.size = (Math.random() * 10) + 2;
			this.weight = (Math.random() * 2) - 0.5;
		}
		this.y += this.weight;
		this.weight += 0.2;

		if(this.y > this.canvas.height - this.size){
			this.weight *= -1;
		}
	}
}

// function init(){
// 	let particleArray = [];
// 	const numberOfParticles = 100;

// 	for(let i = 0; i < numberOfParticles; i++){
// 		let x = Math.random() * canvas.width;
// 		let y = Math.random() * canvas.height;
// 		let size = (Math.random() * 5) + 2;
// 		let color = 'black';
// 		let weight = 1;
// 		particleArray.push(new Particle(x, y, size, color, weight));
// 	}
// }

// function animate(){
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	for(let i = 0; i < particleArray.length; i++){
// 		particleArray[i].update();
// 		particleArray[i].draw();
// 	}
// 	requestAnimationFrame(animate);
// }

function wavyTextBackground(){

	
}


function createIcons(){
		const canvas = document.querySelector("#background-layer");

		const icon1 = document.createElement("i");
		icon1.className = "material-icons";
		icon1.innerHTML = "add";
		icon1.style="margin-left: 100px;"
		canvas.append(icon1);

		const icon2 = document.createElement("i");
		icon2.className = "material-icons";
		icon2.innerHTML = "camera";
		canvas.append(icon2);

		const materialIcons = document.querySelectorAll(".material-icons");
		materialIcons.forEach((icon) =>{
			icon.style = "color: blue; font-size: 60px;";
		});
	}

BackgroundGenerator.prototype = {

	addSimpleBackground: function(){
		const body = document.querySelector("#background-layer");
		
		console.log(body);
		body.style = "background-color: aqua";
	},

	addBubbles: function (){
		const canvas = document.querySelector("#background-layer-2");
		canvas.style = "top: 0; left: 0; z-index: -10; background: linear-gradient(#25364f, #4d71a5, #9bc4ff);"	

		// TODO: why do we use this and why is it not working
		const ctx = canvas.getContext('2d');

		canvas.height = canvas.innerHeight;
		canvas.width = canvas.innerWidth;

		let particleArray = [];

		// Getting the mouse's position
		const mouse = {
			x: null,
			y: null
		};

		canvas.addEventListener('mousemove', (event)=>{
			mouse.x = event.x;
			mouse.y = event.y;
			console.log(mouse.x, mouse.y);
		});

		// Reduce load
		setInterval(()=>{
			mouse.x = undefined;
			mouse.y = undefined;
		}, 200);

		function init(canvas){
			// let particleArray = [];
			const numberOfParticles = 100;
		
			for(let i = 0; i < numberOfParticles; i++){
				let x = Math.random() * canvas.width;
				let y = Math.random() * canvas.height;
				let size = (Math.random() * 5) + 2;
				let color = 'black';
				let weight = 1;
				particleArray.push(new Particle(x, y, size, color, weight, canvas, ctx, mouse));
			}
		}

		function animate(canvas){
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for(let i = 0; i < particleArray.length; i++){
				particleArray[i].update();
				particleArray[i].draw();
			}
			requestAnimationFrame(animate);
		}

		init(canvas);
		animate(canvas);
	},

	iconsBackground: function (){
		createIcons();
	},

	wavyText: function(){
		wavyTextBackground();
	}
}
