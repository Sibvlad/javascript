'use strict';
define(function () {
  return function (picture) {
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

    image.src = picture.url;

    imageTimeout = setTimeout(function () {
      pictureElement.classList.add('picture-load-failure');
    }, 2000);

    return pictureElement
  }
});
