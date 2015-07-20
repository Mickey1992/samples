document.addEventListener("DOMContentLoaded", function() {
	document.querySelector("#left-arrow").addEventListener("click", function() {
		moveDiv(document.querySelector("#container"), -800, 100,leftMoveChange);
	});
	document.querySelector("#right-arrow").addEventListener("click", function() {
		moveDiv(document.querySelector("#container"), 800, 100,rightMoveChange);
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
	var addIndex = (midIndex === 105)?2:(midIndex === 104)?1:midIndex+2;						
	div.removeChild(firstImg);
	div.innerHTML = div.innerHTML.trim() + '<img src="images/1 ('+addIndex+').jpg" id="' + addIndex + '" />';
	div.style.left = parseInt(div.style.left) + 800+"px";			
}

function rightMoveChange(div){
	var firstImg = div.querySelector("img");
	var midIndex = parseInt(firstImg.nextSibling.id);
	var addIndex = (midIndex ===1)?104:((midIndex === 2)?105:midIndex-2);			
	var img = document.createElement("img");
	img.src = "images/1 ("+addIndex+").jpg";
	img.id = addIndex;
	div.insertBefore(img,firstImg);
	div.removeChild(div.lastElementChild);	
	div.style.left = parseInt(div.style.left) - 800+"px";
}

// container.removeChild(img);
// container.appendChild(img);
// var img = document.createElement("img");
// img.src = "some url";