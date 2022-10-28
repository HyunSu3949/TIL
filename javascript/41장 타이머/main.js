const $button = document.querySelector("button");
const $debounceMsg = document.querySelector(".debounce-msg");

function debounce(callback, delay) {
  let timerId = 0;
  debugger;
  function setTimer() {
    debugger;
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay);
  }
  return setTimer;
}
function countPlus() {
  $debounceMsg.textContent = +$debounceMsg.textContent + 1;
}

$button.addEventListener("click", debounce(countPlus, 6000));
