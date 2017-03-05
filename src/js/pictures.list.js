define(["pictures.one"], function (createPictureBlock) {
  return function (pictures, target) {
    var container = document.getElementById(target);

    pictures.forEach(function (picture) {
      container.appendChild(createPictureBlock(picture));
    });
  };
});
