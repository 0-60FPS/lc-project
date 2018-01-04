var $columns = new Carousel("#columnsPictures");
var $ballistae = new Carousel("#ballistaePictures");
var $staging = new Carousel("#stagingPictures");

function Carousel(carouselDiv) {
	var _this = this;
	this.length = $(carouselDiv + " .carouselContainer .currentImage").children().length;
	this.current = 0;
	$(carouselDiv + " .carouselContainer .arrow").on("click", function() {
		if (this.className == "rightArrow arrow") {
			if (_this.current == _this.length - 1) {
				_this.current = 0;
			} else {
				_this.current += 1;
			}
		} else if (this.className == "leftArrow arrow") {
			if (_this.current == 0) {
				_this.current = _this.length - 1;
			} else {
				_this.current -= 1;
			}
		}
		_this.update();
	});
	this.update = function() {
		var images = $(carouselDiv + " .carouselContainer .currentImage").children()
		for (var i = 0; i < this.length; i++) {
			$(carouselDiv + " .carouselContainer .currentImage").children()[i].className = "hidden";
		}
		console.log(this.current)
		images[this.current].className = "";
	}

}

