const button = document.querySelector("button");

button.addEventListener("click", func(cb));
function func(callback) {
  let num = 0;
  debugger;
  function refunc() {
    console.log(++num);
    setTimeout(callback, 2000);
  }
  console.log("ho");
  return refunc;
}

function cb() {
  console.log("cd");
}
