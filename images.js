var frameWidth;
var imagesCount = 105;
var speed = 100;
var template = "images/1 ({INDEX}).jpg";
function slideImages(container) {
	container.style.left = (-frameWidth) + "px";
	container.innerHTML = generateImageHTML(imagesCount) + generateImageHTML(1) + generateImageHTML(2);
}
function generateImageHTML(index) {
	return '<img src="' + template.replace("{INDEX}", index) + '" id = "' + index + '" />';
}
document.addEventListener("DOMContentLoaded", function() {
	frameWidth = parseInt(window.getComputedStyle(document.querySelector("#frame"), null).getPropertyValue("width"));
	document.querySelector("#left-arrow").addEventListener("click", function() {
		moveDiv(document.querySelector("#container"), -frameWidth, speed,leftMoveChange);
	});
	document.querySelector("#right-arrow").addEventListener("click", function() {
		moveDiv(document.querySelector("#container"), frameWidth, speed,rightMoveChange);
	});
});
function moveDiv(div, distance, time, callback){
	var speed = distance / time;
	var elapsedTime = 0;
	var intervalId = setInterval(function() {
		elapsedTime += 1;
		div.style.left = parseInt(div.style.left) + speed * 1 + "px";
		if (elapsedTime >= time) {			
			clearInterval(intervalId);
			if (callback !== undefined) callback(div);
		}
	}, 1);
}

function leftMoveChange(div){
	var firstImg = div.querySelector("img");
	var midIndex = parseInt(firstImg.nextSibling.id);
	var addIndex;
	if (midIndex == imagesCount - 1) {
		addIndex = 1;
	}
	else if (midIndex === imagesCount) {
		addIndex = 2;
	}
	else {
		addIndex = midIndex + 2;
	}
	div.removeChild(firstImg);
	div.innerHTML = div.innerHTML.trim() + '<img src="images/1 ('+addIndex+').jpg" id="' + addIndex + '" />';
	div.style.left = parseInt(div.style.left) + frameWidth+"px";			
}

function rightMoveChange(div){
	var firstImg = div.querySelector("img");
	var midIndex = parseInt(firstImg.nextSibling.id);
	var addIndex;
	if (midIndex == 1) {
		addIndex = imagesCount - 1;
	}
	else if (midIndex === 2) {
		addIndex = imagesCount;
	}
	else {
		addIndex = midIndex-2;
	}
	var img = document.createElement("img");
	img.src = "images/1 ("+addIndex+").jpg";
	img.id = addIndex;
	div.insertBefore(img,firstImg);
	div.removeChild(div.lastElementChild);	
	div.style.left = parseInt(div.style.left) - frameWidth+"px";
}

// container.removeChild(img);
// container.appendChild(img);
// var img = document.createElement("img");
// img.src = "some url";