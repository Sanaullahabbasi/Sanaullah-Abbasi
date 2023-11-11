var timerValue = document.getElementById("timer_value");
var sec = document.getElementById("sec");
var min = document.getElementById("min");
var timer;

function startTimer() {
  var getValue = timerValue.value;
  var minValue = parseInt(getValue.slice(0, 1));
  var secValue = parseInt(getValue.slice(1, 3));
  var minV = parseInt(getValue.slice(0, 2));
  var secV = parseInt(getValue.slice(2, 4));
  timerValue.style.display = "none";
  function countDown() {
    if (timerValue.value.length <= 2) {
      getValue--;
      sec.innerHTML = getValue + `<span>s</span>`;
      if (getValue < 1) {
        sec.innerHTML = `<h1>Time Out</h1>`;
      }
    } else if (timerValue.value.length === 3) {
      if (secValue < 1) {
        secValue = 59;
        minValue--;
        console.log(minValue);
      } else {
        secValue--;
        console.log(secValue);
      }

      sec.innerHTML = secValue + `<span>s</span>`;
      min.innerHTML = minValue + `<span>m</span>`;
      if (minValue < 1 && secValue < 1) {
        sec.innerHTML = `<h1>Time Out</h1>`;
        clearInterval(timer);
        min.innerHTML = ``;
      }
    } else if (timerValue.value.length === 4) {
      if (secV < 1) {
        secV = 59;
        minV--;
      } else  {
        secV--;
      }
      if (minV < 1 && secV < 1) {
        sec.innerHTML = `<h1>Time Out</h1>`;
        clearInterval(timer);
        min.innerHTML = ``;
      }
      sec.innerHTML = secV + `<span>s</span>`;
      min.innerHTML = minV + `<span>m</span>`;
    }
  }

  timer = setInterval(countDown, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timerValue.style.display = "block";
  timerValue.value = "";
  sec.innerHTML = ``;
  min.innerHTML = ``;
}
