define(["pictures.one", "gallery"], function (createPictureBlock, createGallery) {
  return function (pictures, target) {
    var gallery = createGallery();
    gallery.setPictures(pictures);

    var container = document.getElementById(target);

    pictures.forEach(function (picture) {
      container.appendChild(createPictureBlock(picture, gallery));
    });
  };
});
