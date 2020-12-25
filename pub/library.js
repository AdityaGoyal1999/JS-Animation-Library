


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
