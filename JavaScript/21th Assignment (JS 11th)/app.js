// <<<<<< Question's Arry of Object >>>>>
var questionList = [
  {
    question: "Q-1  HTML Stand for?",
    option1: "HighText Machine Language",
    option2: "HyperText and links Markup Language",
    option3: "HyperText Markup Language",
    option4: "HyperText Mometnum Language",
    answer: "HyperText Markup Language",
  },
  {
    question: "Q-2  Who is making the Web standards?",
    option1: "Google",
    option2: "Microsoft",
    option3: "Mozilla",
    option4: "The World Wide Web Consortium",
    answer: "The World Wide Web Consortium",
  },
  {
    question: "Q-3 How many tags are in a regular element?",
    option1: 2,
    option2: 1,
    option3: 3,
    option4: 0,
    answer: 2,
  },
  {
    question: "Q-4 What is the difference between an opening tag and a closing tag?",
    option1: "Opening tag has a / in front",
    option2: "There is no difference",
    option3: "closing tag has a / in front",
    option4: "None of above",
    answer: "closing tag has a / in front",
  },
  {
    question: "Q-5 Where is the meta tag only found?",
    option1: "The last page",
    option2: "The home page",
    option3: "The second page",
    option4: "none of above",
    answer: "The home page",
  },
  {
    question: "Q-6 What is an element that does not have a closing tag called",
    option1: "Tag",
    option2: "Empty element",
    option3: "Closed element",
    option4: "None of the above",
    answer: "Empty element",
  },
];

var index = 0;
var score = 0;

function startQuestion(){ 
  
  var question = document.getElementById("question");
var options = document.getElementsByName("option");
index = 0;
var sec = 59;
var min = 3;
var timer;
var remainingTime = document.getElementById('remainingTime')

function countDown (){
        if(sec < 1){
        sec = 59;
        min--
    }
    else{
        sec--;
    }
    
    if(min < 1 && sec < 1){
        clearInterval(timer)
        return
    }
    remainingTime.innerHTML = `
    <div><h6>Time Remining</h6> 
    <p> ${min} : ${sec}</p></div>
  </div>
    `
}

timer=setInterval(countDown, 1000)

question.innerHTML = `
<p>${questionList[index].question}</p>
<div class="option-list">
  <label><input type="radio" name="option" value="${questionList[index].option1}" /> ${questionList[index].option1}</label
  ><br />
  <label><input type="radio" name="option" value="${questionList[index].option2}" /> ${questionList[index].option2}</label
  ><br />
  <label><input type="radio" name="option" value="${questionList[index].option3}" /> ${questionList[index].option3}</label
  ><br />
  <label><input type="radio" name="option" value="${questionList[index].option4}" /> ${questionList[index].option4}</label>
</div>
  `;
index++;
  
}

// console.log("start: " +  index)
function renderQuestion (){
  var question = document.getElementById("question");
  var options = document.getElementsByName("option");
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      if (options[i].value === questionList[index-1].answer) {
        score++;
      }
    }
  }
  if(!questionList[index]){ 
    var per = (score/questionList.length)*100
  // console.log("Correct Question " + score + " out of " + questionList.length);
  // console.log("Percentage " + Math.round(per) + "%");
  if(per > 60){
    Swal.fire({
      title: "Congratulation" + "\n" +   'Your Result' + "\n" + "Correct Question " + score + " out of " + questionList.length + "\n" +"Percentage " + Math.round(per) + "%",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })}
    else{
      Swal.fire({
        title: "Sorry Better Luck for next time" + "\n" +'Your Result' + "\n" + "Correct Question " + score + " out of " + questionList.length + "\n" +"Percentage " + Math.round(per) + "%",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      console.log("soory better luck next time")
    }
    return;
  }
  question.innerHTML = `
  <p>${questionList[index].question}</p>
  <div class="option-list">
    <label><input type="radio" name="option" value="${questionList[index].option1}" /> ${questionList[index].option1}</label
    ><br />
    <label><input type="radio" name="option" value="${questionList[index].option2}" /> ${questionList[index].option2}</label
    ><br />
    <label><input type="radio" name="option" value="${questionList[index].option3}" /> ${questionList[index].option3}</label
    ><br />
    <label><input type="radio" name="option" value="${questionList[index].option4}" /> ${questionList[index].option4}</label>
  </div>
    `;
  index++;
  // console.log("next: " +  index)
}

function renderQuestionPrevious (){
  var question = document.getElementById("question");
  var options = document.getElementsByName("option");
  index--;
  // for (var i = 0; i < options.length; i++) {
  //   if (options[i].checked) {
  //     if (options[i].value === questionList[index].answer) {
  //       score++;
  //     }
  //   }
  // }
  if(!questionList[index]){
    var per = (score/questionList.length)*100
    // console.log("Correct Question " + score + " out of " + questionList.length);
    // console.log("Percentage " + Math.round(per) + "%");
    if(per > 60){
    Swal.fire({
      title: 'Your Result' + "\n" + "Correct Question " + score + " out of " + questionList.length + "\n" +"Percentage " + Math.round(per) + "%",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })}
    else{
      Swal.fire({
        title: "Sorry Better Luck for next time" + "\n" +'Your Result' + "\n" + "Correct Question " + score + " out of " + questionList.length + "\n" +"Percentage " + Math.round(per) + "%",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      console.log("soory better luck next time")
    }
    return;
  }
  


    question.innerHTML = `
    <p>${questionList[index].question}</p>
    <div class="option-list">
    <label><input type="radio" name="option" value="${questionList[index].option1}" /> ${questionList[index].option1}</label
    ><br />
    <label><input type="radio" name="option" value="${questionList[index].option2}" /> ${questionList[index].option2}</label
    ><br />
    <label><input type="radio" name="option" value="${questionList[index].option3}" /> ${questionList[index].option3}</label
    ><br />
    <label><input type="radio" name="option" value="${questionList[index].option4}" /> ${questionList[index].option4}</label>
    </div>
    `;
    // console.log("previous: " +  index)

}




// <<<<<< User upload a picture >>>>>>

function loadFile(event) {
  var image = document.getElementById("userImage");
  var userPicture = document.getElementById("userPicture");
  var file = event.target.files[0];
  console.log(file)
  if (file) {
    image.src = URL.createObjectURL(file);
  }
}


// <<<< Timer contdown >>>>

// var sec = 59;
// var min = 3;
// var timer;
// var remainingTime = document.getElementById('remainingTime')

// function countDown (){
//         if(sec < 1){
//         sec = 59;
//         min--
//     }
//     else{
//         sec--;
//     }
    
//     if(min < 1 && sec < 1){
//         clearInterval(timer)
//         return
//     }
//     remainingTime.innerHTML = `
//     <div><h6>Time Remining</h6> 
//     <p> ${min} : ${sec}</p></div>
//   </div>
//     `
// }

// timer=setInterval(countDown, 1000)


console.log(questionList[0].answer)