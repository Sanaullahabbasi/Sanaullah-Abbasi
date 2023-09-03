// ==========chapter 14 - 16 ==========

// ==Question No 1 ==

// ====JS literal notation ====

// var students 
// console.log(students)


// ==Question No 2 ==

// ====JS object notation ====

// var students = []
// console.log(students)


// ==Question No 3 ==

// var students =["Abid", "Baber", "Choudry", "Dilawar"]
// console.log (students)


// ==Question No 4 ==

// var primeNumber =[2, 3, 5, 7, 11, 13, 17]
// console.log (primeNumber)


// ==Question No 5 ==

// var booleanArry =[false, true]
// console.log (booleanArry)


// ==Question No 6 ==

// var  mixedArray = ["Fan" , 2, true, "Doors", 5, false]
// console.log(mixedArray)


// ==Question No 7 ==
// var education = ["SSC", "HSC", "BCS",
//     "BS", "BCOM", "MS", "M.", "Phil.", "PhD"]
//     console.log(education)
// document.write ( "<h1>" + "Qualification" + "</h1>" + "<br/>" + "1)" + " " + education[0] + "<br/>"  
// + "2)" + " " + education[1] + "<br/>"
// + "3)" + " " + education[2] + "<br/>"  + "4)" + " " + education[3] + "<br/>"
// + "5)" + " " + education[4] + "<br/>" + "6)" + " " + education[5] + "<br/>"
// + "7)" + " " + education[6] + "<br/>" + "8)" + " " + education[7] + "<br/>"
// + "9)" + " " + education[8] + "<br/>")


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

var phone = [" Apple ", " Samsung ", " Motorola ", " Nokia ", " Sony ", " Haier "]
document.write( phone)
