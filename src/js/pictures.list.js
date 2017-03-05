define(["pictures.one", "gallery"], function (Picture, createGallery) {
  return function (pictures, target) {
    var gallery = createGallery();
    gallery.setPictures(pictures);

    var container = document.getElementById(target);

    pictures.forEach(function (picture) {
      var pic = new Picture(picture, gallery);
      container.appendChild(pic.element);
    });
  };
});
