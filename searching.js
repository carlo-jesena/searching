// Linear search
var indexOf = function(array, value) {
    for (var i=0; i<array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
};

// Binary search
var arr = [1,2,5,7,9,10,13,33];

var binarySearch = funtion(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  var index = Math.floor((start + end) / 2);
  var item = array[index];

  console.log(start, end);
  if (item === value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
};
