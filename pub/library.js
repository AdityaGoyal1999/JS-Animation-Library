


function BackgroundGenerator(){

}

BackgroundGenerator.prototype = {

	addSimpleBackground: function(){
		const bg = document.querySelector("#background-layer-1");
		bg.style = "background-color: bisque";
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

		bg.addEventListener("mousemove", function(e){

			var style = document.createElement('style');
            // style.type = 'text/css';
			var keyFrames = 'span{\
				position: absolute;\
				background: url(img/heart.png);\
				pointer-events: none;\
				transform: translate(-50%, -50%);\
				width: 100px;\
				height: 100px;\
				background-size: cover;\
				animation: animate 2s linear infinite;\
			}';
			style.innerHTML = keyFrames;
			document.getElementsByTagName('head')[0].appendChild(style);
			
			const heart = document.createElement("span");
			let x = e.offsetX;
			let y = e.offsetY;
			heart.style.left = x + 'px';
			heart.style.top = y + 'px';
			// console.log(x, y);
			let size = Math.random() * 100;
			heart.style.width = 20 + size + 'px';
			heart.style.height = 20 + size + 'px';
			console.log(heart.style.width);
			console.log(heart.style.height);
			// heart.style="";
			bg.appendChild(heart);

			setTimeout(function(){
				heart.remove();
			}, 2000);

		});
	},

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
