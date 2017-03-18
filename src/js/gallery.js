'use strict';

define(function () {

  var Gallery = function () {
    this.pictures = [];
    this.activePicture = 0;
    this.overlayElement = document.querySelector('.gallery-overlay');
    this.closeElement = document.querySelector('.gallery-overlay-close');
    this.imageElement = document.querySelector('.gallery-overlay-image');
  };

  Gallery.prototype.setPictures = function (pictures) {
    this.pictures = pictures;
  };

  Gallery.prototype.show = function (number) {
    var self = this;

    this.closeElement.onclick = function () {
      self.closeHandler();
    };

    this.imageElement.onclick = function () {
      self.next();
    };

    this.overlayElement.classList.remove("invisible");
    this.setActivePicture(number);
  };

  Gallery.prototype.hide = function () {
    this.overlayElement.classList.add("invisible");
    this.imageElement.onclick = null;
    this.closeElement.onclick = null;
  };

  Gallery.prototype.setActivePicture = function (number) {
    this.activePicture = number;
    if (this.pictures[number]) {
      this.imageElement.src = this.pictures[number].url;

      this.overlayElement.querySelector(".likes-count").textContent = this.pictures[number].likes;
      this.overlayElement.querySelector(".comments-count").textContent = this.pictures[number].comments;
    }
  };

  Gallery.prototype.closeHandler = function () {
    this.hide();
  };

  Gallery.prototype.next = function () {
    var nextPicture = this.activePicture + 1;
    if (nextPicture > this.pictures.length - 1) nextPicture = 0;
    this.setActivePicture(nextPicture);
  };


  return function () {
    return new Gallery();
  }
});
