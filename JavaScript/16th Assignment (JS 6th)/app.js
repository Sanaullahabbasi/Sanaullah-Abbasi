// ==========||||>>>>>>>>>>>>>>>>>>>>>>  chapter 35 - 38 <<<<<<<<<<<<<<<<<<<<<<||||==========

// =============>>>>>>   Question No 1     <<<<<<=============

// function tellTime() {
//   var today = new Date();
//   document.write(today )
// }

// tellTime();

// =============>>>>>>   Question No 2     <<<<<<=============

// function greeting() {
//   var first = prompt("Enter your first name here");
//   var last = prompt("Enter your last name here");
//   alert("Hello " + first + " " + last);
// }

// greeting();

// =============>>>>>>   Question No 3     <<<<<<=============

// function add (a, b){
//     return a + b
// }
// var num1 = prompt("Enter a first number");
// var num2 = prompt("Enter a second number");

// document.write("The addition of " + num1 + " and " + num2 + " is " + add(parseInt(num1), parseInt(num2)) )

// =============>>>>>>   Question No 4     <<<<<<=============

// function calculator (a, b, c){

//       document.write("<h1>" + "The Calculator Result is" + "</h1>");
//       document.write(a + " " + b + " " + c + " = " );
//       var output = a + b + c
//       return output
//     }

//     document.write(calculator(3, "+" , 4));

// =============>>>>>>   Question No 5     <<<<<<=============

// function sq (a){
// return a*a
// }
// document.write("The square is "  +  sq(6));

// =============>>>>>>   Question No 6     <<<<<<=============

// function factorial(val) {
//     for (var i = val - 1; i > 0; i--) {
//     val = val * i;
//   }
//   return val;
// }
// console.log(factorial(5));

// =============>>>>>>   Question No 7     <<<<<<=============

// function count(start, end) {
//   for (var i = start; i <= end; i++) {
//     document.write(i + "<br/>");
//   }
// }
// count(33, 43);

// =============>>>>>>   Question No 8     <<<<<<=============

//+++++>>>>>>>> Q#8   1st Aproach <<<<<<<<++++++
// function calHyp() {
//   var inputBase = +prompt("Enter the base of the right an triangle");
//   var inputPerp = +prompt("Enter the perpendicular of the right an triangle");
//   function calBaseSq(a) {
//     var baseSq = Math.pow(a, 2);
//     return baseSq;
//   }
//   function calPerpSq(b) {
//     var perpSq = Math.pow(b, 2);
//     return perpSq;
//   }

//   return calBaseSq(inputBase) + calPerpSq(inputPerp);
// }
// console.log(calHyp());

//+++++>>>>>>>> Q#8   2nd Aproach <<<<<<<<++++++

// var inputBase = +prompt("Enter the base of the right an triangle");
// var inputPerp = +prompt("Enter the perpendicular of the right an triangle");

// function calHyp() {
//     function calSq(a, b) {
//       var baseSq = Math.pow(a, 2);
//       var perpSq = Math.pow(b, 2);
//       return baseSq + perpSq;
//     }

//     return calSq(inputBase, inputPerp);
//   }
//   console.log(calHyp());

//   document.write("Hypotenuse of Right Angle Triangle of base = " + inputBase + " and Perpendicular is " + inputPerp + " = " + calHyp()  )

// =============>>>>>>   Question No 9     <<<<<<=============

// arguments as vallue

// function area(a, b) {
//   return a * b;
// }
// console.log(area(4, 5));

// arguments as variable

// var width = +prompt("Enter width here")
// var height  = +prompt("Enter height here")
// function area(a, b) {
//   return a * b;
// }
// console.log(area(width, height));

// =============>>>>>>   Question No 10     <<<<<<=============

// function plaindrome() {
//   var word = prompt("Enter a word and check its plaindrome or not");
//   word = word.toLocaleLowerCase();
//   var plaindrome = "";
//   for (var i = word.length - 1; i >= 0; i--) {
//     plaindrome += word[i];
//   }
//   if (word === plaindrome) {
//     alert("Yes " + word + " is plaindrome");
//   } else {
//     alert("No " + word + " is not a plaindrome word");
//   }
// }

// plaindrome();

// =============>>>>>>   Question No 11     <<<<<<=============

//+++++>>>>>>>> Q#11    1st Aproach <<<<<<<<++++++

// function upperCase (str){
//     var toArr = str.split(' ');
//     var wholeSen = [];
//     for (var i=0; i<toArr.length; i++){
//         wholeSen.push(toArr[i].charAt(0).toUpperCase()+toArr[i].slice(1))
//     }
//     return wholeSen.join(' ')
// }

// console.log(upperCase("the quick brown fox"))

//+++++>>>>>>>> Q#11   2nd Aproach <<<<<<<<++++++

// function upper(str) {
//     return str.replace(/(^| )./g, x => x.toUpperCase())
// }

// console.log(upper("sanaullah abbasi where are you"))

// =============>>>>>>   Question No 12     <<<<<<=============

// function longestWord(str1) {
//   var toConvertArr = str1.split(" ");
//   var lar = "";
//   for (var i = 0; i < toConvertArr.length; i++) {
//     for (var j = 0; j < toConvertArr[i].length; i++) {
//       if (toConvertArr[i].length > toConvertArr[j].length) {
//         lar += toConvertArr[i];
//       } else if (toConvertArr[i].length < toConvertArr[j].length) {
//         lar += toConvertArr[j];
//       }
//     }
//     console.log(toConvertArr[i]);
//   }
//   // return wholeText.join(' ')
// }
// longestWord("sanaullah abbasi");
