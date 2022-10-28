//sync

[1, 2, 3, 4].forEach(function (i) {
  console.log("sync");
});

// async

function asyncForEach(arr, cb) {
  arr.forEach(function () {
    setTimeout(cb, 0);
  });
}

asyncForEach([1, 2, 3, 4], function (i) {
  console.log("async");
});
