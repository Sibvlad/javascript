'use strict';

require(['pictures.list', 'pictures.load', 'gallery', 'upload'], function (renderPictures, load, gallery) {
  var URL = "http://localhost:63342/213757-kekstagram/bin/data/pictures.js";

  var onLoad = function (data) {
    var filtersList = document.getElementsByClassName("filters");
    filtersList[0].classList.add("hidden");
    renderPictures(data, "pictures");
    filtersList[0].classList.remove("hidden");
  };

  load(URL, onLoad);
});
