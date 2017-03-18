'use strict';
define(function () {
  return function (url, options, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function (event) {
      var loadedData = JSON.parse(event.target.response);
      callback(loadedData.slice(options.from, options.to));
    };

    var params = "?";
    for (var key in options) {
      params += key + "=" + options[key] + "&";
    }

    xhr.open('GET', url + params);
    xhr.send();
  };
});
