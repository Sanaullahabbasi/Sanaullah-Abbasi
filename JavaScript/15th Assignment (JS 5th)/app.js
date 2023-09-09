// ==========chapter 26 - 30 ==========

// ==Question No 1 ==

// var num = prompt("Enter a positive intiger here")

// document.write( "<br/>" + "Number: " + num + "<br/>" + "Round off value: "  + Math.round(num) + "<br/>" + "Floor value: "  + Math.floor(num)  + "<br/>" + "Ceil value: "  + Math.ceil(num))

// ==Question No 2 ==

// var num = prompt("Enter a negative intiger here")

// document.write( "<br/>" + "Number: " + num + "<br/>" +
// "Round off value: "  + Math.round(num) + "<br/>" + "Floor value: "  + Math.floor(num)  + "<br/>" + "Ceil value: "  + Math.ceil(num))

// ==Question No 3 ==

// var num3 = prompt("Enter a number and check its absolute value")

// if (num3 < 0){
//     numUpdate = - num3
//     document.write("The abasolute value of " + num3 + " is "  + numUpdate)
// }
// else{
//     document.write("The abasolute value of " + num3 + " is "  + num3)
// }

// ==Question No 4  ==

// var dice = Math.round(Math.random()*6)
// var dice1 = Math.round(Math.random()*6)
// document.write("Random dice value: " + dice + "<br/>" + "<br/>")
// document.write("Random dice value: " + dice1 + "<br/>" + "<br/>")

// ==Question No 5  ==

// var head = Math.round(Math.random()*2)
// var tail = Math.round(Math.random()*1)
// if ( head > 1){
//     document.write( "<br/>" + head  + "<br/>" +"Random coin value: Heads " + "<br/>" + "<br/>")
// }
// else if ( tail == 1){
//     document.write(  "<br/>" + tail + "<br/>" +"Random coin value: Tails " + "<br/>" + "<br/>")
// }
// else{
//     document.write("Tie")
// }

// ==  Question No 6  ==

// var rand = Math.random() * 100
// document.write("Random number between 1 and 100: " + "<b>" + rand.toFixed(2) + "</b>")

// ==  Question No 7  ==

// var weight = prompt("Enter your weight in kilograms")

// document.write("The weight of user is " + weight.slice(0,2) + " kilograms" )

// ==  Question No 8  ==

// var secInputNum = prompt("Enter a number between 1 and 10")
// var secNum = Math.random()* 10
// var num = 1
// if ( +secInputNum === secNum){
//     alert("Congratulation")
// }
// else{
//     alert("Try Again!")
// }

// ==========chapter 31 - 34 ==========

// ==Question No 1 ==

// var currentDate = new Date();
// document.write("<h3>" + currentDate + "</h3>")

// ==Question No 2 ==

// var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "Septemeber", "Ocotober", "November", "December" ]
// var currentDate = new Date();
// document.write("<h3>" + "Current Month: " + months[currentDate.getMonth()] + "</h3>")

// ==Question No 3 ==

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var currentDate = new Date();

// alert("Today is " + days[currentDate.getDay()].slice(0,3))

// ==Question No 4 ==

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var currentDate = new Date();

// if (currentDate.getDay() === 0 ){

//     alert("Its FUN day ")
// }
// else if (currentDate.getDay() === 6){
//     alert("Its FUN day ")
// }
// else{
//     alert("Its not FUN day")
// }

// ==Question No 5 ==

// var currentDate = new Date();
// if (currentDate.getDate() < 15) {
//   document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of month")
// }

// ==Question No 6 ==

// var currentDate = new Date();
// document.write(
//   "Current Date: " +
//     currentDate +
//     "<br/>" +
//     "<br/>" +
//     "Elapsed milliseconds since January 1, 1970: " +
//     currentDate.getTime() +
//     "<br/>" +
//     "<br/>" +
//     "Elapsed minutes since January 1, 1970: " +
//     currentDate.getTime() / (1000 * 60 * 60)
// );

// ==Question No 7 ==

// var currentDate = new Date();
// if (currentDate.getHours() <= 12){
//   alert("It's AM" )
// }
// else if (currentDate.getHours() === 0){
//   alert("It's " + currentDate.getHours() + " is midnight" )
// }
// else {
//   alert("It's PM")
// }

// ==Question No 8 ==

// var lastDate = new Date("31 Dec, 2020")

// document.write("<h2>" + "Later date: " + lastDate + "</h2>")

// ==Question No 9 ==

// var ramadanDate = new Date("18 June, 2015").getTime();
// var currentDate =new Date().getTime();
// var diff = currentDate - ramadanDate
// document.write(Math.round(diff / (1000 * 60 * 60 * 24 ) ) + " days have passed since 1st Ramadan, 2015")

// ==Question No 10 ==

// var refDate = new Date("5 Dec, 2015 22:50:16");
// var begDate = new Date("1 Jan, 2015");
// var diffOld = refDate.getTime() - begDate.getTime()

// document.write("On reference date " + refDate + "," + "<br/>" + Math.round(diffOld / (1000 * 60)) + " seconds had passed since beginning of 2015"  )

// ==Question No 11 ==

// var currentDate = new Date();
// var hours = new Date().getHours();
// // // var AmOrPm = hours >= 12 ? 'pm' : 'am';
// hours = (hours % 12) || 12;
// var time = new Date("09 sep, 2023 22:17");
// var timeHours = new Date("09 sep, 2023 22:17").getHours();
// // // var AmOrPm1 = timeHours >= 12 ? 'pm' : 'am';
// timeHours = (timeHours % 12) || 12;

// var diff = hours - timeHours

// if ( hours > timeHours ){
//   var diff = hours - timeHours
// }
// else if (hours < timeHours){
//   var diff = timeHours - hours
// }

// document.write( "Current date: " + currentDate + "<br/>" + diff + " hour ago, it was " + time )

// ==Question No 12 ==

// var currentDate = new Date();
// var back100Years = new Date();
// back100Years.setFullYear(1923);

// document.write( "Current date: " + currentDate + "<br/>" + " 100 years back, it was " + back100Years )

// ==Question No 13 ==

// var userAgeInput = prompt("Enter your age here");
// var currentDate = new Date().getFullYear();
// var ageYear = currentDate - userAgeInput

// document.write("Your Birth year is " + ageYear)

// ==Question No 14 ==

// var userNam = prompt("Enter your name and check your KE bill");
// var months = [
//   "January",
//   "Feburary",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "Septemeber",
//   "Ocotober",
//   "November",
//   "December",
// ];

// var currentMonth = new Date().getMonth();
// var unit = 410;
// var chargesPerUnit = 16;
// var totalPayment = unit * chargesPerUnit
// var latePaymentCharges = 350;

// document.write(
//   "<h1>" +
//     "K-Electric Bill" +
//     "</h1>" +
//     "<br/>" +
//     "<br/>" +
//     "Customer Name: " + "<b>" +
//     userNam + "</b>" +
//     "<br/>" + "Month: " + "<b>" +
//     months[currentMonth] + "</b>" +
//     "<br/>" + "Number of units: " +  "<b>" + unit + "</b>" +   "<br/>" + "Charges per unit: "
//     +  "<b>" + chargesPerUnit + "</b>" + "<br/>" + "<br/>" +
//     "Net Amount Paybale (within Due Date): " +  "<b>" + totalPayment + "</b>" + "<br/>"+ 
//     "Late payment surcharge: " + "<b>" + latePaymentCharges + "</b>" +   "<br/>" +
//     "Gross Amount Payable (After Due Date): " + "<b>" + (latePaymentCharges + totalPayment) + "</b>"
// );
