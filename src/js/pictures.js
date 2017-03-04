'use strict';

(function () {

  var PICTURES_LOAD_URL = 'http://localhost:63342/213757-kekstagram/bin/data/pictures.js';

  var pictures;

  function loadData(data) {
    pictures = data;
    init();
  }

  function load(url, callback) {
    var callbackName = "jsonpCallback_04032017";

    window[callbackName] = function (data) {
      callback(data);
    };

    var script = document.createElement('script');
    script.src = url + "?callback=" + callbackName;
    document.body.appendChild(script);
  }

  var pictureTemplate = document.getElementById("picture-template");
  var pictureTemplateContainer = 'content' in pictureTemplate ? pictureTemplate.content : pictureTemplate;

  function init() {
    var filtersList = document.getElementsByClassName("filters");

    filtersList[0].classList.add("hidden");
    renderPictures(pictures);
    filtersList[0].classList.remove("hidden");
  }

  function createPictureBlock(picture) {
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

  function renderPictures(pictures) {
    var container = document.getElementById("pictures");

    pictures.forEach(function (picture) {
      container.appendChild(createPictureBlock(picture));
    });
  }

  load(PICTURES_LOAD_URL, loadData);
})();
