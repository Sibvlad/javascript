'use strict';

module.exports = function(list, filterID) {

  var comments = function (a, b) {
    return a.comments - b.comments;
  };

  var newComp = function (a, b) {
    return a.created - b.created;
  };

  var likes = function (a, b) {
    return a.likes - b.likes;
  };

  switch (filterID) {
    case "filter-popular":
      list.sort(likes);
      break;
    case "filter-new":
      list.sort(newComp);
      break;
    default:
      list.sort(comments);
      break;
  }

  return list;
};
