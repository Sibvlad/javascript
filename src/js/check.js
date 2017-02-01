function getMessage(a, b) {
  if (typeof a === "boolean") {
    if (a) {
      return "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
    } else {
      return "Переданное GIF-изображение не анимировано";
    }
  }

  if (typeof  a === "number") {
    return "Переданное SVG-изображение содержит " + a + " объектов и " + (+b * 4) + " атрибутов"
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    var artifactsSquare = multipleArrays(a, b);
    return "Общая площадь артефактов сжатия: " + artifactsSquare + " пикселей";
  }

  if (Array.isArray(a)) {
    var amountOfRedPoints = sumArray(a);
    return "Количество красных точек во всех строчках изображения: " + amountOfRedPoints;
  }

}

function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function multipleArrays(a, b) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

function multipleArrays2(arrayA, arrayB) {
  var arrayC = [];

  for (var i = 0; i < arrayB.length; i++) {
    arrayC.push(arrayA[i] * arrayB[i]);
  }

  return sumArray(arrayC);
}
