var input = document.getElementById("screen");

function inputValue(num) {
  var previousValue = input.value.slice(input.value.length-1);

  var operators = ["+", "-", "*", "/"];
  if (
    operators.indexOf(previousValue) !== -1 &&
    operators.indexOf(num) !== -1
  ) {
    input.value = input.value.slice(0, -1) + num;
  } else {
    input.value += num;
  }
}
function clearInput() {
  input.value = "";
}
function result() {
  input.value = eval(input.value);
  if (input.value == undefined || input.value == NaN) {
    alert("Enter a valid operation");
  }
}

function del() {
  input.value = input.value.slice(0, input.value.length - 1);
}



