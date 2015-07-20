var options = {
	width: 800,
	speed: 100,
	images: function() {
		var a = [];
		for (var i = 1; i <= 105; i++) {
			a.push("images/1 (" + i + ").jpg");
		}
	},
	frame: document.querySelector("#frame");
};
function Slide(options) {
	this.options = options;
	this.init();
}
Slide.prototype = {
	init: function() {
		this.options.frame.style.position = "relative";
		this.options.frame.style.overflow = "hidden";
		this.options.frame.style.width = this.options.width + "px";
	},
	moveLeft: function() {

	}
};
Slide.prototype.constructor = Slide;

var slide = new Slide(options);
slide.moveLeft();
