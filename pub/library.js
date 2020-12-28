


function BackgroundGenerator(){

}

BackgroundGenerator.prototype = {

	wavyText: function(){
		// TODO: enter the background color and text color
		const bg = document.querySelector("#background-layer-1");
		
		const texts = bg.querySelectorAll(".wavy-text");
		texts.forEach((text)=>{
			const text_content = text.innerHTML;
			const parent_text = text.parentElement;
			text.innerHTML="";
			// Adding spans to each letters in the text
			for(let i=0; i < text_content.length; i++){
				const letter_span = document.createElement("span");
				letter_span.className = "letter-span";
				letter_span.innerHTML = text_content[i];
				let num = i+1;
				letter_span.style=`color: #000;\ 
								   --i:${num};`;
				
				text.append(letter_span);
			}
		});

		const spans = bg.querySelectorAll(".letter-span");
		spans.forEach((span)=>{
			span.onmouseover = () =>{
				var style = document.createElement('style');
				var keyFrames = '.letter-span{\
					position: relative;\
					display: inline-block;\
					color: #fff;\
					animation: animate 1s ease-in-out infinite;\
					animation-delay: calc(0.1s * var(--i));\
				}\
				\
				@keyframes animate{\
				\
					0%{\
						transform: translateY(0px);\
					}\
					20%{\
						transform: translateY(-20px);\
					}\
					40%, 100%{\
						transform: translateY(0px);\
					}\
				}';
				style.innerHTML = keyFrames;
				document.getElementsByTagName('head')[0].appendChild(style);
			};

			span.onmouseout = () =>{
				var style = document.createElement('style');
				var keyFrames = '.letter-span{\
					position: relative;\
					display: inline-block;\
					color: #fff;\
					animation: none;\
					animation-delay: none;\
				}';
				style.innerHTML = keyFrames;
				document.getElementsByTagName('head')[0].appendChild(style);
			};
		});
	},

	eyesMotion: function(){

		// Create the eyes of the background
		const bg = document.querySelector("#background-layer-2");
		bg.style="background-color: rgb(234, 195, 135); display: flex; justify-content: center; align-items: center;"
		const eyes = document.createElement("div");
		eyes.className = "eyes";
		eyes.style = "display: flex;"
		for(let i = 0; i < 2; i++){
			let eye = document.createElement("div");
			eye.className = "eye";
			eye.style="position: relative; width: 120px; height: 120px; display: block; background: white; margin: 0 20px; border-radius: 50%;"
			eyes.append(eye);
		}
		var style = document.createElement('style');
		var keyFrames = '.eye::before{\
			position: absolute;\
			content: \'\';\
			top: 50%;\
			left: 35px;\
			transform: translate(-50%, -50%);\
			width: 45px;\
			height: 45px;\
			border-radius: 50%;\
			background: #000;\
			border: 10px solid rgb(110, 72, 39);\
		}';
		style.innerHTML = keyFrames;
		document.getElementsByTagName('head')[0].appendChild(style);

		bg.append(eyes);

		// Make the eyes follow the cursor
		bg.addEventListener("mousemove", function(){
			const eyes = document.querySelectorAll('.eye');
			eyes.forEach((eye)=>{
				let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
				let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

				let radian = Math.atan2(event.pageX - x, event.pageY - y);
				let rotation = (radian * (180 / Math.PI) * -1) + 270;
				eye.style.transform = "rotate("+rotation+"deg)";
			});
		})
	},

	cardAnimation: function(){
		const bg = document.querySelector("#background-layer-3");
		const img = bg.querySelector("img");
		img.style = "width: 200px;"
		const parent = img.parentElement;
		img.remove()
		const card_title = bg.querySelector(".card-title");
		const card_content = bg.querySelector(".card-content");
		card_title.remove();
		card_content.remove();
		// console.log(card_title.innerHTML)
		// bg.querySelector(".card-content").innerHTML = "";

		// creating the card
		const card = document.createElement("div");
		card.className = "card";
		card.style = "position: relative; width: 275px; height: 325px; background-color: rgb(238, 239, 240)";
		// console.log(parent.innerHTML);
		parent.append(card);
	},

	starMouseTrail: function(){
		const bg = document.querySelector("#background-layer-4");
		bg.style = "overflow: hidden; background: #000; position: relative;"
		var style = document.createElement('style');
		var keyFrames = '.starSpan{\
			position: absolute;\
			background: url(img/star.png);\
			pointer-events: none;\
			transform: translate(-50%, -50%);\
			width: 100px;\
			height: 100px;\
			background-size: cover;\
			animation: animate 2s linear infinite;\
		}';
		style.innerHTML = keyFrames;
		document.getElementsByTagName('head')[0].appendChild(style);

		bg.addEventListener("mousemove", function(e){
			const star = document.createElement("span");
			star.className = "starSpan";
			let x = e.offsetX;
			let y = e.offsetY;
			star.style.left = x + 'px';
			star.style.top = y + 'px';
			// console.log(x, y);
			let size = Math.random() * 30;
			star.style.width = 20 + size + 'px';
			star.style.height = 20 + size + 'px';
			console.log(star.style.width);
			console.log(star.style.height);
			// star.style="";
			bg.appendChild(star);

			setTimeout(function(){
				star.remove();
			}, 100);

		});
	},

	// starMouseTrail: function(){
	// 	const bg = document.querySelector("#background-layer-5");
	// 	bg.style = "overflow: hidden; background: #000; position: relative;"
	// 	var style = document.createElement('style');
	// 		var keyFrames = '.starSpan{\
	// 			position: absolute;\
	// 			background: url(img/tire.png);\
	// 			pointer-events: none;\
	// 			transform: translate(-50%, -50%);\
	// 			width: 100px;\
	// 			height: 100px;\
	// 			background-size: cover;\
	// 			animation: animate 2s linear infinite;\
	// 		}';
	// 		style.innerHTML = keyFrames;
	// 		document.getElementsByTagName('head')[0].appendChild(style);

	// 	bg.addEventListener("mousemove", function(e){
	// 		const star = document.createElement("span");
	// 		star.className = "starSpan";
	// 		let x = e.offsetX;
	// 		let y = e.offsetY;
	// 		star.style.left = x + 'px';
	// 		star.style.top = y + 'px';
	// 		// console.log(x, y);
	// 		let size = Math.random() * 30;
	// 		star.style.width = 20 + size + 'px';
	// 		star.style.height = 20 + size + 'px';
	// 		console.log(star.style.width);
	// 		console.log(star.style.height);
	// 		// star.style="";
	// 		bg.appendChild(star);

	// 		setTimeout(function(){
	// 			star.remove();
	// 		}, 100);

	// 	});
	// },

	// rippleButton: function(){
	// 	const bg = document.querySelector("#background-layer-2");
	// 	// bg.style="background-color: black;"
	// 	const buttons = document.querySelectorAll(".ripple-button");
	// 	buttons.forEach((button)=>{
	// 		const textContent = button.innerHTML;
	// 		button.innerHTML = "";
	// 		for(let i = 0; i<50; i++){
	// 			let span = document.createElement("span");
	// 			button.append(span);
	// 		}
	// 	});
	// },
}
