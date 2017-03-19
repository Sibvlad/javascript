'use strict';


require(['pictures.list', 'pictures.load', 'gallery', 'upload'], function (renderPictures, load) {
  var URL = "http://localhost:1507/api/pictures";
  var footer = document.querySelector('footer');
  var TARGET = "pictures";
  var PAGE_SIZE = 12;
  var loadOptions = {
    from: 0,
    to: PAGE_SIZE,
    filter: "popular"
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

  var throttle = function (operation, delay) {
    var lastCall = Date.now();

    return function() {
      if (Date.now() - lastCall >= delay) {
        operation();
        lastCall = Date.now();
      }
    };
  };

  var optimizedScroll = throttle(function () {
    if (footer.getBoundingClientRect().bottom - window.innerHeight <= 100) {
      load(URL, loadOptions, onLoad);
    }
  }, 100);

  var changeFilterHandler = function () {
    var form = document.getElementsByClassName("filters")[0];
    form.addEventListener("change", function (event) {
      loadOptions.filter = event.target.value;
      loadOptions.from = 0;
      loadOptions.to = PAGE_SIZE;
      load(URL, loadOptions, onLoad);
      var container = document.getElementById(TARGET);
      container.innerHTML = "";
    });
  };

  window.addEventListener('scroll', optimizedScroll);
  changeFilterHandler();
  load(URL, loadOptions, onLoad);
});

