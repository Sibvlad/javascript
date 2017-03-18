'use strict';
define(function () {
  var Picture = function (picture, gallery) {
    var pictureTemplate = document.getElementById("picture-template");
    var pictureTemplateContainer = 'content' in pictureTemplate ? pictureTemplate.content : pictureTemplate;

    var pictureElement = pictureTemplateContainer.querySelector('.picture').cloneNode(true);
    pictureElement.querySelector('.picture-likes').textContent = picture.likes;
    pictureElement.querySelector('.picture-comments').textContent = picture.comments;

    var image = new Image();
    var imageTimeout = null;

    image.onload = function (event) {
      clearTimeout(imageTimeout);
      pictureElement.querySelector("img").setAttribute("src", event.target.src)
    };

    image.onerror = function () {
      pictureElement.classList.add('picture-load-failure');
    };

    if (picture.hasOwnProperty("preview")) {
      image.src = picture.preview;
    } else {
      image.src = picture.url;
    }


    imageTimeout = setTimeout(function () {
      pictureElement.classList.add('picture-load-failure');
    }, 2000);

    pictureElement.onclick = function (event) {
      event.preventDefault();
      gallery.show(gallery.pictures.indexOf(picture));
    };

    this.data = picture;
    this.element = pictureElement;

    this.remove = function () {
      this.element.onclick = null;
    };
  };
  return Picture;
});
