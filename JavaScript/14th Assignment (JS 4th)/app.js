// ==========chapter 17 - 20 ==========

// ==Question No 1 ==

// var arr = [["Grandpapa","Grandmama", "dougther"], ["Mama", "papa", "son"] ]
// for (var i=0; i<arr.length; i++){
//     for (var j=0; j<arr[i].length; j++){
//         console.log(arr[i][j])
//     }
// }

// ==Question No 2 ==

// var multiDimentionalMatrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// for (var i = 0; i < multiDimentionalMatrix.length; i++) {
//   console.log(multiDimentionalMatrix[i]);
// }

// ==Question No 3 ==

// for (var i=1; i<=10; i++){
//     console.log(i)
// }

// ==Question No 4 ==

// var table = prompt("Enter number to show its multiplication table")
// var length = prompt("Enter length multipliation table")
// document.write("Multipliation table of " + table + "<br/>" + "Length " + length + "<br/>")

// for(var i=1; i<= length; i++){
//    document.write( table + " x " + i + " = " + (table * i) + "<br/>")
// }

// ==Question No 5 ==

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(var i=0; i<fruits.length; i++){

//     document.write("<br/>" + fruits[i] + "<br/>")}
// for (var i=0; i<fruits.length; i++){
//     document.write("<br/>" + "Element at index " + fruits.indexOf(fruits[i]) + " is " + fruits[i] + "<br/>")
// }

// ==Question No 6 ==
//======>>> part a <<<=====

// document.write("<h1>" + "Counting" + "</h1>")

// for (var i = 0 ; i<=15; i++){
//     document.write([i]+ ", ")
// }

// ==Question No 6 ==
//======>>> part b <<<=====

// document.write("<h1>" + "Reverse counting" + "</h1>")

// for (var i =  10 ; i >= 1; i--){
//     document.write([i]+ ", ")
// }

// ==Question No 6 ==
//======>>> part c <<<=====

// document.write("<h1>" + "Even" + "</h1>")

// for (var i =  1 ; i <= 20; i++){
//     if ( i % 2 === 0)
//     document.write([i] + ", ")
// }

// ==Question No 6 ==
//======>>> part d <<<=====

// document.write("<h1>" + "Odd" + "</h1>")

// for (var i =  1 ; i <= 20; i++){
//     if ( i % 2 === 1)
//     document.write([i] + ", ")
// }

// ==Question No 6 ==
//======>>> part e <<<=====

// document.write("<h1>" + "Series" + "</h1>")

// for (var i =  1 ; i <= 20; i++){
//     if ( i % 2 === 0)
//     document.write([i] + "k, ")
// }

// ==Question No 7 ==

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt(
//   "Welcome to ABC Bakery, What what do you want to order sir/ma'am?"
// );
// input = input.toLowerCase();
// var firstCap = input.charAt(0).toUpperCase();
// var fullInput = firstCap + input.slice(1).toLowerCase();
// var flag = false;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === input) {
//     console.log(
//       input + " is availabe at index " + arr.indexOf(arr[i]) + " in our bakery"
//     );
//     break
//   }

//   else {
//     console.log(
//       "we are sorry. " + input + " is " + "not a availabe " + " in our bakery"
//     );
//   }
// }

// ==Question No 8 ==

// var number = [24, 53, 78, 91, 12];
// var maxNum = number[0];

// for (var i = 0; i < number.length; i++) {
//   if (number[i] > maxNum) {
//     maxNum = number[i];
//   }
// }
// document.write("Array Items: 24, 53, 78, 91, 12 " + "<br/>"+ "The largest Number is " + maxNum);

// ==Question No 9==

// var number = [24, 53, 78, 91, 12];
// var maxNum = number[0];

// for (var i = 0; i < number.length; i++) {
//   if (number[i] < maxNum) {
//     maxNum = number[i];
//   }
// }
// document.write("Array Items: 24, 53, 78, 91, 12 " + "<br/>"+ "The Smallest Number is " + maxNum);

// ==Question No 9==
// document.write("<h1>" + "Multiple of 5 upto 100 are "+ "</h1>" + "<br/>" )
// for (var i=1; i<=20; i++){
//     document.write(+ i*5 + ", ")
// }

// ==========chapter 21 - 25 ==========

// ==Question No 1 ==

// var firstName = prompt("Enter your first name here");
// var lastName = prompt("Enter your last name here");
// var lowerFirst = firstName.slice(1).toLowerCase();
// var lowerLast = lastName.slice(1).toLowerCase();
// firstName = firstName.charAt().toUpperCase();
// lastName = lastName.charAt().toUpperCase();
// var fullName = firstName + lowerFirst + " " + lastName + lowerLast;
// alert("Hello " + fullName);

// ==Question No 2 ==

// var favorite = prompt("Tell me about your favorite mobile phone model");
// document.write(
//   "Your favorite phone is: " +
//     "<b>" +
//     favorite +
//     "</b>" +
//     "<br/>" +
//     "Length of String:" +
//     "<b>" +
//     favorite.length +
//     "</b>"
// );

// ==Question No 3 ==

// var nationality = "Pakistani"
// document.write("String: " + nationality + "<br/>" + "index of 'n':" + nationality.indexOf("n"))

// ==Question No 4 ==

// var str = "Hello World"
// document.write("String: " + str + "<br/>" + "index of 'l':" + str.lastIndexOf("l"))

// ==Question No 5 ==

// var nationality = "Pakistani"
// document.write("String: " + nationality + "<br/>" + "index of '3': " + nationality.charAt(3))

// ==Question No 6 ==

// var firstName = prompt("Enter your first name here");
// var lastName = prompt("Enter your last name here");
// var lowerFirst = firstName.slice(1).toLowerCase();
// var lowerLast = lastName.slice(1).toLowerCase();
// firstName = firstName.charAt().toUpperCase();
// lastName = lastName.charAt().toUpperCase();
// var fullName = firstName.concat(lowerFirst, " ", lastName, lowerLast);
// alert("Hello " + fullName);

// ==Question No 7 ==

// var city = "Hyderabad";
// document.write("City: " + city + "<br/>" + "After replacemnet: " + city.replace("Hyder", "Islam"))

// ==Question No 8 ==

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g, "&"))

// ==Question No 9 ==

// var str = "472";
// document.write(
//   "Value: " +
//     str +
//     "<br/>" +
//     "Type: " +
//     typeof str +
//     "<br/>" +
//     "Value: " +
//     str +
//     "<br/>" +
//     "Type: " +
//     typeof parseInt(str)
// );

// ==Question No 10 ==

// var input = prompt("Write a sentance here and I will caplitize it")
// document.write("User input: " + input + "<br/>" + "Upper Case: " + input.toUpperCase())


// ==Question No 11 ==

// var input = prompt("Write a word here and I will convert it to title case")
// document.write("User input: " + input + "<br/>" + "Title Case: " + input.charAt().toUpperCase() + input.slice(1).toLowerCase() )



// ==Question No 12 ==

// var num = 35.36;
// document.write("Number: " + num + "<br/>" + "Result: " + String(num*100))


// ==Question No 13 ==


// var userName = prompt("Enter user name here")
// var spc = ["!", ",", ".", "@"]
// var store = ""

// for (var i=0; i<userName.length; i++){
//     if (spc[0] !== userName[i] && spc[1] !== userName[i] && spc[2] !== userName[i] && spc[3] !== userName[i] && spc[4] !== userName[i]){
//         alert("Hi " + userName)
//     }
//     else{
//         alert("Special character @!,. are not allowed")
//     }
// }



// ==Question No 14 ==

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt(
//   "Welcome to ABC Bakery, What what do you want to order sir/ma'am?"
// );
// input = input.toLowerCase();
// var firstCap = input.charAt(0).toUpperCase();
// var fullInput = firstCap + input.slice(1).toLowerCase();
// var flag = false;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === input) {
//     console.log(
//       input + " is availabe at index " + arr.indexOf(arr[i]) + " in our bakery"
//     );
//     break
//   }

//   else {
//     console.log(
//       "we are sorry. " + input + " is " + "not a availabe " + " in our bakery"
//     );
//   }
// }


// ==Question No 16 ==


// var university = "University of Karachi";
// uniToArray = university.split();
// for (var i=0; i<university.length; i++){
//     console.log(university[i])
// }



// ==Question No 17 ==


// var user = prompt("Enter your user name")
// console.log(user[user.length-1])



// ==Question No 18 ==


// var text = "the quick brown fox jumps over the lazy dog";
// var match = text.match(/the/g).length

// document.write("Text: the quick brown fox jumps over the lazy dog" +  "<br/>" + "There are " + match + " occurance(s) of word the" )
