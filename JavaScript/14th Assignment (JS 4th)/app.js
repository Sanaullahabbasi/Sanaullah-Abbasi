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

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt(
  "Welcome to ABC Bakery, What what do you want to order sir/ma'am?"
);
input = input.toLowerCase();
var firstCap = input.charAt(0).toUpperCase();
var fullInput = firstCap + input.slice(1).toLowerCase();
var flag = false;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === input) {
    console.log(
        input + " is availabe at index " + arr.indexOf[input] + " in our bakery"
      );
  }
  else {
    console.log(  
      "we are sorry. " + input + " is " + "not a availabe " + " in our bakery"
    );}

}

// if (flag) {
//   console.log(
//     input + " is availabe at index " + a.indexOf[a] + " in our bakery"
//   );
// } else {
//   console.log(
//     "we are sorry. " + input + " is " + "not a availabe " + " in our bakery"
//   );
// }

// ==Question No 8 ==

// var studentsName = ["Mazhar", "Tabish", "Imran"];
// var studentsScore = [420, 410, 480];
// var totalScore = 500;

// document.write(
//     "Score of " + studentsName[0] + " " + "is" + " " + studentsScore[0] + "."
//     + " " +"Percentage: " + ((studentsScore[0] / totalScore) * 100) + "%" + "<br/>"
//     + "Score of " + studentsName[1] + " " + "is" + " " + studentsScore[1] + "."
//     + " " +"Percentage: " + ((studentsScore[1] / totalScore) * 100) + "%" + "<br/>"
//     +"Score of " + studentsName[2] + " " + "is" + " " + studentsScore[2] + "."
//     + " " +"Percentage: " + ((studentsScore[2] / totalScore) * 100) + "%" )

// ==Question No 9 ==

// var namesOfColor = ["Black", "Grey", "Red", "Blue", "Orange", "White", "Brown", "Pink", "Yellow", "Green", "Purple"]

//======>>> part a <<<=====
// var addStartColor = prompt("Here is a list of color check and add your color name here \n" + namesOfColor )

// namesOfColor.unshift(addStartColor)
// console.log(namesOfColor)

//======>>> part b <<<=====
// var addEndColor = prompt("Here is a list of color check and add your color name here \n" + namesOfColor )

// namesOfColor.push(addEndColor)
// console.log(namesOfColor)

//======>>> part c <<<=====
// var addStartColor1 = prompt("Here is a list of color check and add your first color name here \n" + namesOfColor )
// var addStartColor2 = prompt("Here is a list of color check and add your second color name here \n" + namesOfColor )

// namesOfColor.unshift(addStartColor1, addStartColor2)
// console.log(namesOfColor)

//======>>> part d <<<=====

// namesOfColor.shift()
// console.log(namesOfColor)

//======>>> part e <<<=====
// namesOfColor.pop()
// console.log(namesOfColor)

//======>>> part f <<<=====

// var listOfColor = prompt("Here is a list of color check it define on which position you want to add your color name \n" + namesOfColor )
// var nameOfPositionColor = prompt("Enter desired color name which you want to add in " + listOfColor )

// namesOfColor.splice(listOfColor, 0, nameOfPositionColor)
// console.log(namesOfColor)

//======>>> part g <<<=====

// var listOfColorDel = prompt("Here is a list of color check it define on which position you want to remove your color name \n" + namesOfColor )
// var howManyDel = prompt("Define how many color you want to remove from " + listOfColorDel + " to")

// namesOfColor.splice(listOfColorDel, howManyDel)
// console.log(namesOfColor)

// ==Question No 10 ==

// var scoreOfStudents = [320, 230, 480, 120]
// document.write ("<br/>" + "Students of Score: " + scoreOfStudents[0] + " "  + scoreOfStudents[1] + " "  + scoreOfStudents[2] + " "  + scoreOfStudents[3] +
// "<br/>" + "Ordered Score of Students: " + scoreOfStudents.sort())

// ==Question No 11 ==

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// var copyCities = cities.slice(2, 4)

// document.write("<br/>" + "Cities List " + cities + "<br/>" +  "<br/>" +
// "Selected cities list: " + "<br/>" + copyCities)

// ==Question No 12 ==

// var arr = ["This ", " is ", " my ", " cat"];

// document.write ("<h1>" + "Array" + "</h1>" + "<br/>" + arr + "<br/>" + "<br/>" +
// "<h1>" + "String" + "</h1>" + "<br/>" + arr.join(" ")
// )

// ==Question No 13 ==

// var list = ["Keyboard", "Mouse", "Printer", "Monitor"]

// document.write("Devices: " + "<br/>" + list + "<br/>" + "<br/>" + "Out:" + "<br/>"  + list.shift()  + "<br/>" + "Out:" + "<br/>"  + list.shift()  + "<br/>" + "Out:" + "<br/>"  + list.shift()  + "<br/>" + "Out:" + "<br/>"  + list.shift() )

// ==Question No 14 ==

// var list = ["Keyboard", "Mouse", "Printer", "Monitor"]

// document.write("Devices: " + "<br/>" + list + "<br/>" + "<br/>" + "Out:" + "<br/>"  + list.pop()  + "<br/>" + "Out:" + "<br/>"  + list.pop()  + "<br/>" + "Out:" + "<br/>"  + list.pop()  + "<br/>" + "Out:" + "<br/>"  + list.pop() )

// ==Question No 15 ==

// var phone = [" Apple ", " Samsung ", " Motorola ", " Nokia ", " Sony ", " Haier "]
// document.write( phone)
