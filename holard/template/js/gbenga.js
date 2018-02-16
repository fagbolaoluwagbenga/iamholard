
// Two methods for timers - setTimeout and SetInterval (single / repeating)
myElement.style.changeBackgroundImage="images/aimage";


document.getElementById("contact")="contactUs";



function simpleMessage() {
	alert("This is just an alert box");
}

// settimeout is in milliseconds
//setTimeout(simpleMessage,5000);

var myImage = document.getElementById("contactUs");

var imageArray = ["images/aimage.jpg","images/bimage.jpg","images/cimage.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
setInterval(changeImage,3000);

