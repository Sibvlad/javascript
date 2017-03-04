define(["pictures.one"], function (one) {
  return function (pictures) {
    var container = document.getElementById("pictures");

    pictures.forEach(function (picture) {
      container.appendChild(one(picture));
    });
  };
});
