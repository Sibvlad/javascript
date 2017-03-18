'use strict';

module.exports = function (list, filterID) {

  var comments = function (a, b) {
    return b.comments - a.comments;
  };

  var newComp = function (a, b) {
    return a.created - b.created;
  };

  var likes = function (a, b) {
    return b.likes - a.likes;
  };

  var sortFun = likes;

  switch (filterID) {
    case "popular":
      sortFun = likes;
      break;
    case "new":
      sortFun = newComp;
      break;
    case "discussed":
      sortFun = comments;
      break;
  }

  return list.sort(sortFun);
};
