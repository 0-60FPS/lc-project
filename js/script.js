var array = ["trees.jpg", "waterfall.jpg", "lake.jpg", "mountain.jpg", "night.jpg"];
var photos = new Display(array, "assets/displayImages/");
photos.addInitialDisplayImage("imageContainer");
photos.createBottomToggle("bottomSelect");
photos.addArrows("leftArrow", "rightArrow");

function Display(photos, path) {
	"use strict";
	if (this instanceof Display) {
    	this.id = "displayPhoto"
		this.length = photos.length;
		this.currentIndex = 0;
		this.updateIndexValue = function (direction) {
			var current = document.getElementById("selector" + this.currentIndex);
			var element;
			if (direction == true) {
				if (this.currentIndex == (this.length - 1)) {
					this.currentIndex = 0;
				} else {
					this.currentIndex += 1;
				}
				var element = document.getElementById("selector" + this.currentIndex);
			} else {
				if (this.currentIndex == 0) {
					this.currentIndex = this.length - 1;
				} else {
					this.currentIndex -= 1;
				}
				var element = document.getElementById("selector" + this.currentIndex);
			}
			this.selectIndexToggle(element, current);
			console.log(this.currentIndex);
		}
		this.addInitialDisplayImage = function (target) {
			var element = document.getElementById(target);
			var newImage = document.createElement("img");
			newImage.id = this.id;
			newImage.className = "photo";
			newImage.src = path + photos[this.currentIndex];
			element.appendChild(newImage);
		}
		this.updateImages = function () {
			var currentPhoto = document.getElementById(this.id);
			currentPhoto.src = path + photos[this.currentIndex];
		}
		this.createBottomToggle = function(target) {
			var element = document.getElementById(target);
			var num = Math.pow((this.length - 1), 2) + 1.25;
			element.style.width = num + "em";
			for (var i = 0; i < this.length; i++) {
				var increment = (this.length - 1) * i
				var newToggle = document.createElement("div");
				var self = this;
				newToggle.id = "selector" + i;
				newToggle.className = "circleSelector";
				newToggle.setAttribute("value", i);
				newToggle.addEventListener("click", function() {
					var current = document.getElementById("selector" + self.currentIndex);
					self.selectIndexToggle(this, current);
				});
				if (i !== 0) {
					newToggle.style.marginLeft = increment + "em";
				} else {
					newToggle.className += " selected";
				}
				element.appendChild(newToggle);
			}
		}
		this.selectIndexToggle = function(element, currentSelected) {
			var value = element.getAttribute("value");
			this.currentIndex = parseInt(value);
			currentSelected.className = "circleSelector";
			element.className += " selected";
			this.updateImages();
		}
		this.addArrows = function (back, forward) {
			var arrow1 = document.getElementById(forward);
			var arrow2 = document.getElementById(back);
			var self = this;
			arrow1.addEventListener("click", function() {
				self.updateIndexValue(true);
				self.updateImages();
			});
			arrow2.addEventListener("click", function() {
				self.updateIndexValue(false);
				self.updateImages();
			});
		}
  	} else {
  		var defaultImages = ["trees.jpg", "waterfall.jpg", "lake.jpg", "mountain.jpg", "night.jpg"];
  		var defaultPath = "assets/displayImages/";
  		return new Display(defaultImages, defaultPath);
  	}
	
}
