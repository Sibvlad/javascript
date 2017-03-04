'use strict';

require(['pictures.list', 'pictures.load'], function (list, load) {
  var pictures = [];

  var onLoad = function (data) {
    var filtersList = document.getElementsByClassName("filters");
    filtersList[0].classList.add("hidden");
    list(data);
    filtersList[0].classList.remove("hidden");
  };

  load("http://localhost:63342/213757-kekstagram/bin/data/pictures.js", onLoad);
});
