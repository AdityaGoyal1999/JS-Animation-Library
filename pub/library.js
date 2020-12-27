


function BackgroundGenerator(){

}

BackgroundGenerator.prototype = {

	wavyText: function(){
		// TODO: enter the background color and text color
		const bg = document.querySelector("#background-layer-1");
		bg.style = "background-color: #000";
		const texts = bg.querySelectorAll(".wavy-text");
		texts.forEach((text)=>{
			const text_content = text.innerHTML;
			text.style = "color: #fff";
			text.innerHTML="";
			// Adding spans to each letters in the text
			for(let i=0; i < text_content.length; i++){
				const letter_span = document.createElement("span");
				letter_span.className = "letter-span";
				letter_span.innerHTML = text_content[i];
				let num = i+1;
				letter_span.style=`--i:${num};`;
				letter_span.style = "color: #fff";
				bg.append(letter_span);
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
					font-size: 2em;\
					text-transform: uppercase;\
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
		});
	},

	eyesMotion: function(){

		const bg = document.querySelector("#background-layer-2");
		bg.style="background-color: rgb(234, 195, 135);"
		const eyes = document.createElement("div");
		eyes.className = "box";
		for(let i = 0; i < 2; i++){
			const eye = document.createElement("div");
			eye.className = "eye";
			eye.style="position: relative; width: 120px; height: 120px; display: block; background: white; margin: 0 20px; border-radius: 50%;"
			eyes.append(eye);
		}

		bg.append(eyes);
	},

	rippleText: function(){
		const texts = document.querySelectorAll(".ripple-text");
		texts.forEach((text)=>{
			const content = text.innerHTML.trim();
			text.innerText = "";
			
			// Loop over each letter and assign span to all letters
			for(let i = 0; i<content.length;i++){
				let createdSpan = document.createElement("span");
				createdSpan.innerHTML = content[i];
				createdSpan.className = "ripple-text-span";
				text.append(createdSpan);
			}
		});
		const spans = document.querySelectorAll(".ripple-text-span");
		spans.forEach((span)=>{
			span.addEventListener("mouseover", ()=>{
				console.log("over");
				span.style="color: blue; padding: 10px; font-size: 50px;"
				
			});
			span.addEventListener("mouseout", ()=>{
				// console.log("over");
				span.style="color: black; padding: 0px;"
			});
		});
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
