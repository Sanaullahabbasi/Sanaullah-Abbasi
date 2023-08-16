// ==========chapter 6-9 ==========

// ==Question No 1 ==
var num = 10;
document.write(
  "Restult: " + "<br/>" + "<br/>" + "The Value of a is: " + num + "<br/>"
);

num = ++num;
document.write(
  "The Value of ++a is: " +
    num +
    "<br/>" +
    "Now the Value of a is: " +
    num +
    "<br/>" +
    "<br/>"
);

// num = num++;
document.write(
  "The Value of a++ is: " +
    (num++) +
    "<br/>" +
    "Now the Value of a is: " +
    num +
    "<br/>" +
    "<br/>"
);

num = --num;
document.write(
  "The Value of --a is: " +
    num +
    "<br/>" +
    "Now the Value of a is: " +
    num +
    "<br/>" +
    "<br/>"
);

num = num--;
document.write(
  "The Value of a-- is: " +
    (num--) +
    "<br/>" +
    "Now the Value of a is: " +
    num +
    "<br/>" +
    "<br/>"
);

// ==Question No 2 ==
var a = 2,
  b = 1;
var result = --a - --b + ++b + b--;

document.write(
  "First step ==>" +
    "--a shows the pre decreament and initially its value was a=2 but now after this line the a=1" +
    "<br/>" +
    "<br/>"
);
document.write(
  "Second step ==>" +
    "--b shows the pre decreament and initially its value was b=1 but now after this line the b=0" +
    "<br/>" +
    "Now perform arthimatic operation than we get 1-0 = 1" +
    "<br/>" +
    "<br/>"
);
document.write(
  "Third step ==>" +
    "++b shows the pre incretment and initially its value was b=0 but now after this line the b=1" +
    "<br/>" +
    "Now perform arthimatic operation than we get 1-0+1 = 2" +
    "<br/>" +
    "<br/>"
);
document.write(
  "Fourth step ==>" +
    "b-- shows the post decrement and its value is b=1 therefore its value be show in next step also until or unless we move to next doc file" +
    "<br/>" +
    "Now perform arthimatic operation than we get 1-0+1+1 = 3" +
    "<br/>" +
    "<br/>"
);

document.write(
  "a is" +
    " " +
    a +
    "<br/>" +
    "<br/>" +
    "b is" +
    " " +
    b +
    "<br/>" +
    "<br/>" +
    "Result is" +
    " " +
    result +
    "<br/>" +
    "<br/>"
);


//==Question No 3 ==

var userName = prompt("Enter your user name here")
console.log(userName)

//==Question No 5 ==
var value = prompt("input a number I will show the table of its", 5)
document.write("TABLE OF" + " " + value + "<br/>" + "<br/>" +
  value + " " +"x" +" " + "1" + " " + "=" + (value*1) + "<br/>" +
  value + " " +"x" +" " + "2" + " " + "=" + (value*2) + "<br/>" +
  value + " " +"x" +" " + "3" + " " + "=" + (value*3) + "<br/>" +
  value + " " +"x" +" " + "4" + " " + "=" + (value*4) + "<br/>" +
  value + " " +"x" +" " + "5" + " " + "=" + (value*5) + "<br/>" +
  value + " " +"x" +" " + "6" + " " + "=" + (value*6) + "<br/>" +
  value + " " +"x" +" " + "7" + " " + "=" + (value*7) + "<br/>" +
  value + " " +"x" +" " + "8" + " " + "=" + (value*8) + "<br/>" +
  value + " " +"x" +" " + "9" + " " + "=" + (value*9) + "<br/>" +
  value + " " +"x" +" " + "10" + " " + "=" + (value*10) + "<br/>" 
)

//==Question No 6 ==
var firstSubject = prompt("Enter your firt subject name here");
var secondSubject = prompt("Enter your second subject name here");
var thirdSubject = prompt("Enter your third subject name here");

var marksFirstSubject = 100, marksSecondSubject = 100, marksThirdSubject = 100;

var firstSubjectObtainMarks = prompt("Enter your first subject obtained marks out of 100", 80);
var secondSubjectObtainMarks = prompt("Enter your second subject obtained marks out of 100", 80);
var thirdSubjectObtainMarks = prompt("Enter your third subject obtained marks out of 100", 80);

var firstSubjecPecentage = ((firstSubjectObtainMarks / marksFirstSubject) * 100);
var secondSubjecPecentage = ((secondSubjectObtainMarks / marksSecondSubject) * 100);
var thirdSubjecPecentage = ((thirdSubjectObtainMarks / marksThirdSubject) * 100);
var totaObtainMarks = (+firstSubjectObtainMarks) + (+secondSubjectObtainMarks) + (+thirdSubjectObtainMarks);
var totalMarks = (+marksFirstSubject) + (+marksSecondSubject) + (+marksThirdSubject)

document.write("<table>"+ "<tr>" + "<th>" + "Subject" + "</th>" + "<th>" + "Total Marks" + "</th>" + "<th>" + "Obtained Marks" + "</th>" + "<th>" + "Perscentage" + "</th>" + "</tr>" +
"<tr>" + "<td>" + firstSubject + "</td>" + "<td>" + marksFirstSubject + "</td>" + "<td>" + firstSubjectObtainMarks + "</td>" + "<td>" + firstSubjecPecentage + " " + "%" +"</td>"+
"<tr>" + "<td>" + secondSubject + "</td>" + "<td>" + marksSecondSubject + "</td>" + "<td>" + secondSubjectObtainMarks + "</td>" + "<td>" + secondSubjecPecentage + " " + "%" +"</td>"+
"<tr>" + "<td>" + thirdSubject + "</td>" + "<td>" + marksThirdSubject + "</td>" + "<td>" + thirdSubjectObtainMarks + "</td>" + "<td>" + thirdSubjecPecentage+ " " + "%" +"</td>"
+ "<tr>" + "<th>"+ "</th>" + "<th>" + totalMarks + "</th>" + "<th>" + totaObtainMarks + "</th>" + "<th>" + ((totaObtainMarks / totalMarks) * 100) + "%" +"</th>"
+ "</tr>"
+ "</table>")

// ==========chapter 9-11 ==========

// ==Question No 1 ==

var cityName = prompt ("Enter your city name")
if (cityName === "Karachi"){
alert("Welcome to city of lights")
}

// // ==Question No 2 ==

var gender = prompt ("Enter your gender here")
if (gender === "Male"){
alert("Good Morning Sir")}

if (gender === "Female"){
    alert(" Good Morning Ma'am")
}

// ==Question No 3 ==

var signalColor1 = prompt ("which color is used in top of signal light at road")
var signalColor2 = prompt ("which color is used in center of signal light at road")
var signalColor3 = prompt ("which color is used in bottom of signal light at road")

document.write("<table>" + "<tr>" + "<th>" + "Signal Color" + "</th>" + "<th>" + "Message" + "</th>" +"</tr>" + "</table")
if (signalColor1 === "Red"){
    document.write("<table>" + "<tr>" + "<td>" + signalColor1 + "</td>" + "<td>" + "Must Stop" + "</td>" +  "</tr>" + "</table")
}else {
    alert("Your are not eleigable for licence" + "\n" + "Learn the traffic rules and try again" + "\n" + "Thank your for appreaing in exam")}   
if (signalColor2 === "Yellow"){
    document.write("<table>" + "<tr>" + "<td>" + signalColor2+ "</td>" + "<td>" + "Ready to Move" + "</td>" +  "</tr>" + "</table")
}else {
    alert("Your are not eleigable for licence" + "\n" + "Learn the traffic rules and try again" + "\n" + "Thank your for appreaing in exam")}
if (signalColor3 === "Green"){
    document.write("<table>" + "<tr>" + "<td>" + signalColor3 + "</td>" + "<td>" + "Move Now" + "</td>" +  "</tr>" + "</table")
}
else {
    alert("Your are not eleigable for licence" + "\n" + "Learn the traffic rules and try again" + "\n" + "Thank your for appreaing in exam")}

// ==Question No 4 ==

var fuel = prompt ("Check fuel of your vehicle in ltr")
if (fuel < 0.25){
    alert("Please refill the fuel in your car")
}
else if (fuel > 0.25){
    alert("Your car fuel is safe")
}

// ==Question No 5 ==

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
else {
    alert("given condition for variable b is false");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
else {alert("Condition 1 is false")}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
else {alert("condition 3 is false") }
if(c === 14){
alert("condition 4 is true");

}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if("car" < "cat"){
    alert("car is smaller than cat");
    }

// ==Question No 6 ==

var subject1 = prompt("Enter your first subject here");
var subject2 = prompt("Enter your second subject here");
var subject3 = prompt("Enter your third subject here");

var marksSubject1 = prompt("Enter obrained marks " + " from " + subject1);
var marksSubject2 = prompt("Enter obrained marks " + " from " + subject2);
var marksSubject3 = prompt("Enter obrained marks " + " from " + subject3);

var totalMarks = 300;
var totalScoredMarks = (+marksSubject1) + (+marksSubject2) + (+marksSubject3)
var percentage = ((totalScoredMarks / totalMarks) * 100 )


if (percentage >= 80){
    
document.write( 
    "<table>" + "<tr>" + "<th>" + "Marks Sheet" + "</th>" + "<th>" + "</th>" + "</tr>" +
    "<tr>" + "<td>" + "Total Marks:" + " " + totalMarks + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "Marks Obtained:" + " " + totalScoredMarks + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "Percentage:" + " " + percentage + "%" + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "Grade:" + " " + "A-one" + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "Remarks:" + " " + "Excellent" + "</td>" + "</tr>" +
    + "</table>"  
)
}

else if (percentage >= 70){
    
    document.write( 
        "<table>" + "<tr>" + "<th>" + "Marks Sheet" + "</th>" + "<th>" + "</th>" + "</tr>" +
        "<tr>" + "<td>" + "Total Marks:" + " " + totalMarks + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Marks Obtained:" + " " + totalScoredMarks + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Percentage:" + " " + percentage +  "%" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Grade:" + " " + "A" + "</td>" + "</tr>" +
        "<tr>" + "<td>" + "Remarks:" + " " + "Good" + "</td>" + "</tr>" +
        + "</table>"  
    )
    }

else if (percentage >= 60){
    
        document.write( 
            "<table>" + "<tr>" + "<th>" + "Marks Sheet" + "</th>" + "<th>" + "</th>" + "</tr>" +
            "<tr>" + "<td>" + "Total Marks:" + " " + totalMarks + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "Marks Obtained:" + " " + totalScoredMarks + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "Percentage:" + " " + percentage + "%" +  "</td>" + "</tr>" +
            "<tr>" + "<td>" + "Grade:" + " " + "B" + "</td>" + "</tr>" +
            "<tr>" + "<td>" + "Remarks:" + " " + "You need to improve" + "</td>" + "</tr>" +
            + "</table>"  
        )
        }
else if (percentage <= 60){
    
            document.write( 
                "<table>" + "<tr>" + "<th>" + "Marks Sheet" + "</th>" + "<th>" + "</th>" + "</tr>" +
                "<tr>" + "<td>" + "Total Marks:" + " " + totalMarks + "</td>" + "</tr>" +
                "<tr>" + "<td>" + "Marks Obtained:" + " " + totalScoredMarks + "</td>" + "</tr>" +
                "<tr>" + "<td>" + "Percentage:" + " " + percentage +  "%" + "</td>" + "</tr>" +
                "<tr>" + "<td>" + "Grade:" + " " + "Fail" + "</td>" + "</tr>" +
                "<tr>" + "<td>" + "Remarks:" + " " + "Sorry" + "</td>" + "</tr>" +
                + "</table>"  
            )
            }

// ==Question No 7 ==

var scretNumber = prompt("Guess the Scret number")
if (+scretNumber === 7){
    alert("“Bingo! Correct answer”")
}
else if (+scretNumber === 8){
    alert("“Close enough to the correct answer”")
}
else {
    alert ("your failed to find the scret number")
}
console.log(typeof scretNumber)

// ==Question No 8 ==

var factor = prompt ("Write a number and check which is divisible by 3")
var resultFinal = (+factor % 3)

if (resultFinal === 0){
    alert("Yes it can be divisible by 3")
}
else {
alert("No it" + " " + factor + " " + "cannot be divide by 3")
}
console.log (typeof factor)

// ==Question No 9 ==

var checkNumber = prompt("Check the numbe is even or odd")
var checkevenodd = checkNumber % 2

if (checkevenodd === 0){
    alert("The" + " " + checkNumber + " " + "is even")
    }
else {
    alert ("The" + " " + checkNumber + " " + "is odd")
}

// ==Question No 10 ==

var temp = prompt("Enter your room temperature value to weather status")
if (temp > 40){
    alert("It is too hot outside")
}
else if (temp > 30) {
    alert("The Weather today is Normal")
}
else if (temp > 20) {
    alert("Today’s Weather is cool")
}
else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.")
}

// ==Question No 11 ==
var firstNumber = prompt("Want to calculte your some value so write first number")
var secondNumber = prompt("Want to calculte your some value so write second number")
var operator = prompt("Define which operation would you like to use", "e.g +, -, *, /, %")

if (operator === "+"){
    document.write("The answer is" + " " + ((+firstNumber) + (+secondNumber)))
}
if (operator === "-"){
    document.write("The answer is" + " " + ((+firstNumber) - (+secondNumber)))
}

if (operator === "*"){
    document.write("The answer is" + " " + ((+firstNumber) * (+secondNumber)))
}

if (operator === "/"){
    document.write("The answer is" + " " + ((+firstNumber) / (+secondNumber)))
}

if (operator === "%"){
    document.write("The answer is" + " " + ((+firstNumber) % (+secondNumber)))
}
else {
    alert("Choose the correct operator")
}

// ==========chapter 12 - 13 ==========

// ==Question No 1 ==

var character = prompt("Enter a value and check its status");
var character = A=65, B=66, C=67; D=68, E=69, F=70, G=71, H=72; I=73, J=74, K=75, L=76, M=77; N=78, O=79, P=80, Q=81, R=82; S=83, T=84, U=85, V=86, W=87; X=88, Y=89, Z=90;

if ( character >= 65 || character <= 90){
    alert("The givien value is in " + "is in UpperCase")
}
else {
    alert("This is a number")
}

// ==Question No 2 ==

var integer = prompt("Enter first intiger here")
var integer2 =prompt ("Enter second intiger here")

if(integer > integer2) {
    document.write (integer + " " + "is larger than" + " " + integer2)
}
else if(integer < integer2) {
    document.write (integer2 + " " +"is larger than" + " " + integer)
}
else if(integer === integer2) {
    document.write (integer + " " +  "are equal" + " " + integer2)
}
else {alert("Define a valid number")}

// ==Question No 3 ==

var asknum = prompt ("Enter a numbe i will define you it status")
if (asknum > 0) {
    document.write(asknum + " " + "is a positive number")
}
else if (asknum < 0) {
    document.write(asknum + " " + "is a negative number")
}
else if (asknum === 0) {
    document.write(asknum + " " + "is a Zero")
}
// else {
//     document.write ("Write a valid number")
// }

// ==Question No 4 ==

var vowel = prompt ("Enter a single alphabat i will define is vowel or not");

if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
    document.write ("The" + " " + vowel + " " + "is a vowel word")
}
else {document.write("The" + " " + vowel + " " + "is not a vowel")}

// ==Question No 5 ==

var correctPassword = "Pakistan"
var askPassword = prompt ("Enter your password to login and earn $200")

if (Object.entries(askPassword).length === 0){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Please ener your password",
        footer: '<a href="">Why do I have this issue?</a>'
      })    
}
else if (correctPassword === askPassword){
    alert ("Correct! The password you entered matches the original password")

}
else {
    Swal.fire({
        title: "Incorrect! Password",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}

// ==Question No 6 ==
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day"}
else {
greeting = "Good evening"}

// ==Question No 7 ==

var time = prompt("Enter your city current time here in hours")

if (time >= 0000 && time < 1200 ){
    Swal.fire("Good Morning")
    }
else if (time >= 1200 && time < 1700 ){
    Swal.fire("Good Afternoon")
  
 }
 else if (time >= 1700 && time < 2100 ){
    Swal.fire("Good Evening")
  } 
 else if (time >= 2100 && time <= 2359 ){
    Swal.fire("Good Night")
    }

