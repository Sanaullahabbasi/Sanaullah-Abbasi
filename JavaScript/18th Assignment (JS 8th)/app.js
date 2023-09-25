var character = document.getElementById("character");
var block = document.getElementById("block");
function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}


var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if(blockLeft < 180 && blockLeft>0 && characterTop >= 300){
    block.style.animationn = "none";
    block.style.display = "none"
    Swal.fire({
        title: 'Sorry You Loss',
        width: 600,
        padding: '3em',
        color: '#716add',
        // background: '#fff url(/Images/background.gif)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/Images/crying.gif")
          left top
          // no-repeat
        `
      })
  }

}, 10);


var move = 0;
function abc (){
console.log(event.keyCode)
var get = document.getElementById("character")
if(event.keyCode === 39 && move < 1050){
  move = move + 10
  character.style.left = move + "px"
  character.style.zIndex = "1px"
  console.log(move)
}
if(event.keyCode === 37 && move > 0){
  move = move - 10
  character.style.left = move + "px"
}
  if (event.keyCode === 38){
    character.classList.add("animate");    
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 600);
}

window.onkeydown = abc;
