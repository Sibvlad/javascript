'use strict';


console.log(require);
require(['pictures.list', 'pictures.load', 'gallery', 'upload'], function (renderPictures, load) {
  var URL = "http://localhost:1507/api/pictures";
  var THROTTLE_DELAY = 100;
  var footer = document.querySelector('footer');
  var TARGET = "pictures";
  var PAGE_SIZE = 12;
  var loadOptions = {
    from: 0,
    to: PAGE_SIZE,
    filter: "filter-popular"
  };

  var onLoad = function (data) {
    if (data.length > 0) {
      var filtersList = document.getElementsByClassName("filters");
      filtersList[0].classList.add("hidden");

      renderPictures(data, TARGET);
      filtersList[0].classList.remove("hidden");
      loadOptions.from = loadOptions.from + PAGE_SIZE;
      loadOptions.to = loadOptions.to + PAGE_SIZE;
    }
  };

  var setScrollPage = function () {
    var lastCall = Date.now();
    window.addEventListener('scroll', function () {
      if (Date.now() - lastCall >= THROTTLE_DELAY) {
        if (footer.getBoundingClientRect().bottom - window.innerHeight <= 100) {
          load(URL, loadOptions, onLoad);
        }
        lastCall = Date.now();
      }
    });

    var form = document.getElementsByClassName("filters")[0];

    form.addEventListener("change", function (event) {
      loadOptions.filter = "filter-" + event.target.value;
      loadOptions.from = 0;
      loadOptions.to = PAGE_SIZE;
      load(URL, loadOptions, onLoad);
      var container = document.getElementById(TARGET);
      container.innerHTML = "";
    });
  };

  setScrollPage();
  load(URL, loadOptions, onLoad);


});

