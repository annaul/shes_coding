var img = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1]
];

var zeroArr = [];

function iterate(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        zeroArr.push(i, j);
      }
    }
  }
  return zeroArr;
}
console.log('zeroArr: ', iterate(img));

function findWidth(arr) {
  var width = zeroArr[zeroArr.length-1] - zeroArr[1] + 1;
  return width;
}

console.log('width: ', findWidth(zeroArr));

function findHight(arr) {
  var height = zeroArr[zeroArr.length-2] - zeroArr[0] + 1;
  return height;
}
console.log('height: ', findHight(zeroArr));
