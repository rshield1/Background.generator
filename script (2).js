//Select the H3
var css = document.querySelector("h3");
//Select the colors, and give them a class to distinguish them
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
//Select and grab the ID of body
var body = document.getElementById("gradient");
//console.log to check to make sure my code is working
// Lets change the background color!!  The background is in the body tag
//Use a function and to not repeat yourself
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//We want color1 to have an event listener that will have an input
// and a value
color1.addEventListener("input", setGradient);

//We want color2 to have an event listener that will have an input
// and a value
color2.addEventListener("input", setGradient);