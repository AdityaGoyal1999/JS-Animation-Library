


function BackgroundGenerator(){

}

BackgroundGenerator.prototype = {

	wavyText: function(textColor, backgroundColor, pixelsBounce, animationTime){
		
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
				// save the unique index of each span in the span
				letter_span.style=`color: ${textColor};\ 
								   --index:${num};`;
				text.append(letter_span);
			}
		});

		const spans = bg.querySelectorAll(".letter-span");
		spans.forEach((span)=>{
			span.onmouseover = () =>{
				var style = document.createElement('style');
				var keyFrames = `.letter-span{\
					position: relative;\
					color: ${backgroundColor};\
					animation: wave ${animationTime}s infinite ease-in-out;\
					animation-delay: calc(0.1s * var(--index));\
				}\
				\
				@keyframes wave{\
				\
					0%{\
						transform: translateY(0px);\
					}\
					50%{\
						transform: translateY(-${pixelsBounce}px);\
					}\
					100%{\
						transform: translateY(0px);\
					}\
				}`;
				style.innerHTML = keyFrames;
				document.getElementsByTagName('head')[0].appendChild(style);
			};

			span.onmouseout = () =>{
				// Make the text back to normal when the cursor is not over the intended text
				var style = document.createElement('style');
				var keyFrames = `.letter-span{\
					position: relative;\
					display: inline-block;\
					color: ${backgroundColor};\
					animation: none;\
					animation-delay: none;\
				}`;
				style.innerHTML = keyFrames;
				document.getElementsByTagName('head')[0].appendChild(style);
			};
		});
	},

	eyesMotion: function(backgroundColor, eyeColor, eyeLashColor){

		// Create the structure of the eyes
		const bg = document.querySelector("#background-layer-2");
		bg.style = `background-color: ${backgroundColor}; \
					display: flex; justify-content: center; \
					align-items: center;`
		const eyes = document.createElement("div");
		eyes.className = "eyes";
		eyes.style = "display: flex;"

		for(let i = 0; i < 2; i++){
			let eye = document.createElement("div");
			eye.className = "eye";
			eye.style = "position: relative;\
						width: 100px;\
						height: 100px; \
						margin: 10px;\
						border-radius: 10%;"
			const eyeSocket = document.createElement("div");
			eyeSocket.className = "eyeSocket";

			const eyeLash = document.createElement("div");
			eyeLash.className = "eyeLash";
			eyeLash.style = `background-color: ${eyeLashColor}; \
							height: 10px;\
							animation: none;`;
			var style = document.createElement('style');
			var keyFrames = `@keyframes blink{\
				0%{\
					height:10%;\
				}\
				1%{\
					height: 100%;\
				}\
				2%{\
					height: 10%;\
				}\
				100%{\
					height: 10%;\
				}\
			}`;
			style.innerHTML = keyFrames;
			document.getElementsByTagName('head')[0].appendChild(style);
			// eye socket color will always remain white
			eyeSocket.style = "background-color: #fff; margin: 20px; \
							border-radius: 10%; \
							overflow: hidden;"
			eyeSocket.append(eyeLash);
			eyeSocket.append(eye)
			eyes.append(eyeSocket);
		}

		
		var style = document.createElement('style');
		var keyFrames = `.eye::before{\
			position: absolute;\
			content: \'\';\
			top: 50%;\
			left: 35px;\
			border-radius: 50%;\
			border: 10px solid ${eyeColor};\
			transform: translate(-50%, -50%);\
		}`;
		style.innerHTML = keyFrames;
		document.getElementsByTagName('head')[0].appendChild(style);

		bg.append(eyes);

		// Make the eyes follow the cursor
		bg.addEventListener("mousemove", (event) => {

			const eyes = document.querySelectorAll('.eye');
			eyes.forEach((eye)=>{

				// finding the x and y coordinate of eye
				let x = eye.clientWidth + eye.getBoundingClientRect().left;
				let y = eye.clientHeight + eye.getBoundingClientRect().top;

				// finding angle in eye and cursor in radians
				let radian = Math.atan2(event.x - x, event.y - y);
				
				let degree = (radian * (180 / 3.14));
				let fixing = degree * -1 + 270;

				eye.style.transform = `rotate(${fixing}deg)`;
				
			});

			//  keep the eye lashes moving
			const eyeLashes = bg.querySelectorAll(".eyeLash");
			eyeLashes.forEach((eyeLash) => {
				eyeLash.style = `background-color: ${eyeLashColor}; \
				height: 10px;\
				animation: blink 3s infinite;`;
			});
		});
	},

	cardAnimation: function(cardWidth, cardHeight, cardColor){
		const bg = document.querySelector("#background-layer-3");
		const img = bg.querySelector("img");
		img.style = "width: 250px;"
		const parent = img.parentElement;
		img.remove()
		const card_title = bg.querySelector(".card-title");
		const card_content = bg.querySelector(".card-content");
		card_title.remove();
		card_content.remove();

		// creating the card
		const card = document.createElement("div");
		card.className = "card";
		// card.style = "";
		
		// front side of the card
		const front = document.createElement("div");
		front.className = "front";
		const imgDiv = document.createElement("div");
		img.style = " object-fit: cover; width: 200px; height: 200px;"
		imgDiv.style = "display: flex; justify-content: center; align-items: center; margin-top: 20px;"
		imgDiv.append(img);
		front.append(imgDiv);
		card_title.style = "text-align: center; text-decoration: underline;"
		front.append(card_title);

		front.style = "width: 100%; \
						height: 100%; \
						backface-visibility: hidden; \
						position: absolute;"

		const back = document.createElement("div");
		back.className = "back";
		card_content.style = "text-align: center;";
		back.append(card_content);
		back.style = "width: 100%; \
					height: 100%; \
					backface-visibility: hidden; \
					position: absolute; \
					transform: rotateY(180deg);"

		card.append(front);
		card.append(back);
		card.style = `position: absolute; \
						width: ${cardWidth}; \
						height: ${cardHeight}; \
						background-color: ${cardColor}; \
						transform-style: preserve-3d; \
						transition: all 1s;`

		parent.append(card);

		card.addEventListener("mouseover", () => {
			card.style = `transform: rotateY(180deg);position: absolute; \
			width: ${cardWidth}; \
			height: ${cardHeight}; \
			background-color: ${cardColor}; \
			transform-style: preserve-3d; \
			transition: 1s;`;
			setTimeout(()=>{
				
				card.style = `position: absolute; \
				width: ${cardWidth}; \
				height: ${cardHeight}; \
				background-color: ${cardColor}; \
				transform-style: preserve-3d; \
				transition: all 1s;`
			}, 1000)
		});

		card.addEventListener("mouseout", () => {
			card.style = `position: absolute; \
			width: ${cardWidth}; \
			height: ${cardHeight};\
			background-color: ${cardColor}; \
			transform-style: preserve-3d; \
			transition: all 1s;`
		});

	},

	starMouseTrail: function(starWidth, starHeight, backgroundColor, trailLength){
		const bg = document.querySelector("#background-layer-4");
		bg.style = `overflow: hidden; \
					background: ${backgroundColor}; \
					position: relative;`

		var style = document.createElement('style');
		var keyFrames = `.starSpan{\
			background: url(img/star.png);\
			position: absolute;\
			background-size: 100%;\
			pointer-events: none;\
			transform: translate(-40%, -40%);\
			animation: animate 2.25s infinite linear;\
		}`;
		style.innerHTML = keyFrames;
		document.getElementsByTagName('head')[0].appendChild(style);

		bg.addEventListener("mousemove", function(e){
			const star = document.createElement("span");
			star.className = "starSpan";

			let x = e.offsetX;
			let y = e.offsetY;
			
			star.style.left = x + 'px';
			star.style.width = `${starWidth}px`;
			star.style.top = y + 'px';
			star.style.height = `${starHeight}px`;

			bg.appendChild(star);

			setTimeout(function(){
				star.remove();
			}, trailLength);

		});
	},

	imageSlider: function(){

		const bg = document.querySelector("#background-layer-5");
		const imgDivContainer = bg.querySelector(".image-slider-container");
		imgDivContainer.style = "height:500px;"
		const imgDiv = bg.querySelector(".image-slider");
		imgDiv.style = "position: relative; object-fit:cover;";
		const images = imgDiv.querySelectorAll(".image-slider-image");
		images.forEach((image, i)=>{
			const img_start_pt = (100 * i) + "%";
			console.log(img_start_pt)
			image.style = `width: 100%; height: 100%; position: absolute; ${img_start_pt}; width: 100%;`;
		});
		// creating navigation dots
		const dots = document.createElement("div");
		dots.className = "dots";
		for(let i = 0; i < images.length; i++)
		{
			let dot = document.createElement("div");
			dot.className = "dot";
			if(i === 0){
				dot.classList.add("active");
			}
			dot.style = "background-color: gray; width: 10px; height: 10px; margin: 10px; border-radius: 50%; border: 2px solid #000;"
			dots.append(dot);
		}
		dots.style = "display: flex; margin-top: 20px; justify-content: center; align-items: center;"
		imgDivContainer.append(dots);
		const activeButton = imgDivContainer.querySelector(".active");
		activeButton.style = "background-color: rbg(238, 239, 240); border: 2px solid black; border-radius: 50%; width: 10px; height: 10px; margin: 10px;";
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
}
