// var hour = 0;
// var min = 0;
// var sec = 0;
// var milisec = 0;
var timer;

function start() {
  var timerValue = document.getElementById("timer_value");
  var sec = document.getElementById("sec");
  var min = document.getElementById("min");
  // var secV = timerValue.value;
  // var minV = timerValue.value;
  var getValue = timerValue.value;
  var minValue;
  var secValue;

  function countDown() {
    if (timerValue.value.length === 2) {
      getValue--;
      sec.innerHTML = getValue + `<span>s</span>`;
      
    } else if (timerValue.value.length === 3) {
      // var minV = timerValue.value;
      // var secV = timerValue.value;
      minValue = getValue.slice(0, 1);
      secValue = getValue.slice(1, 3);

      if (secValue < 1) {
        secValue = 59;
        minValue--;
        console.log(minValue);
      } else {
        secValue--;
        console.log(secValue)
      }
      sec.innerHTML = secValue + `<span>s</span>`;
      min.innerHTML = minValue + `<span>m</span>`;
    } else if (timerValue.value.length === 4) {
      var getMin = timerValue.value;
      var getSec = timerValue.value;
      min = getMin.slice(0, 2);
      sec = getSec.slice(2, 4);
      sec.innerHTML = sec + `<span>s</span>`;
      min.innerHTML = min + `<span>m</span>`;
    }
  }

  timer = setInterval(countDown, 1000);
}

//   function countDown() {
//     var sec = document.getElementById("sec");
//     var min = document.getElementById("min");
//     if (sec < 1) {
//       sec = 59;
//       min--;
//       console.log("min==>", min, "sec==>", sec);
//     } else if (sec < 1 && min < 1) {
//       clearInterval(timer);
//       console.log("Cmin==>", min, "Csec==>", sec);
//     }
//   }

//   countDown();
//   timer = setInterval(countDown, 10);
//   console.log(timer, countDown());

//   countDown();
// interval = setInterval(function () {
//   milisec++;
//   getMilisec.innerHTML = milisec;
//   if (milisec >= 100) {
//     sec++;
//     getSeconds.innerHTML = sec + `<span>s</span>`;
//     milisec = 0;
//   } else if (sec >= 60) {
//     min++;
//     getMinutes.innerHTML = min + `<span>m</span>`;
//     sec = 0;
//   } else if (min >= 60) {
//     hour++;
//     getHours.innerHTML = hour + `<span>h</span>`;
//     min = 0;
//   }
// }, 10);
