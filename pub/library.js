


function BackgroundGenerator(){

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
		const body = document.querySelector("body");
		body.style = "background-color: brown"	
	},

	iconsBackground: function (){
		createIcons();
	},
}
