// ==========chapter 1 ==========
var firstName = "JavaScript Alert"

alert(firstName)

var secondName = "JavaScript Alert \n\n\n Welcome to JS land... \n Happy Coding!"

alert(secondName)

var third = "JavaScript Alert \n\n\n Welcome to JS land..."

alert(third)

var fourth = "JavaScript Alert \n\n\n Happy Coding!"

alert(fourth)

var fifth = "JavaScript Alert \n\n\n Hello...! I can run JS through my web browser's console"

console.log (fifth)

// ==========chapter 2 ==========
var userName = ""
var myName = "sanaullah"
var message = "Hello World"
alert(message)

var studentName = "Jhone Doe"
alert(studentName)

var studentAge = "15 years old"
alert(studentAge)

var studentCertification = "certified Mobile Application Development "
alert(studentCertification)

var pizza = "PIZZA \n PIZZ\n PIZ\n PI\n P"
alert(pizza)

var emial = "My email address is sanullah87250@gmail.com"
alert(emial)

var book = "A smarter way to learn JavaScript"

alert("I am trying to learn from the Book" + book)

var doc = "Yes I can write HTML content through JavaScript"
document.write ("<h1>" + doc + "</h1>")

alert (" “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")

// ==========chapter 3 ==========

var age = "I am 30 years old"
alert (age)

var visit = "you have visited this site"

var times = "14 times"
alert (visit + times)

var birthYear = "my birth year is 1993"
document.write ("<h1>" + birthYear + "</h1>")

var VisitorsName = "sanaullah"
var ProductTitle = "T Shirt"
var Quantity = "5"

document.write(VisitorsName + " ordered " + Quantity + ProductTitle + " (s) on XYZ Clothing Store" )

// ==========chapter 4 ==========

var Korangi = "nasir jump "
var Landi = " and Downchowrangi"
var Karachi = "they are two most famous places of karachi"

document.write(Korangi + Landi + Karachi)

var legalVariable = "firstName \n first_Name \n firstname \n firstname123"
var illegalVariable = "123firstname \n first name \n firstname@$ \n first-name"
document.write("<h1>" + legalVariable + "<br/>" + illegalVariable + "</h1>")

var headingText = "Rule for naming JS variables";
var text1 =
  "Variable names can only contain, numbers, $ and _ .For example $my _1stVariable";
var text2 = "Variable must begin with a letter, $ or _ for example $ name, _name or name";
var text3 = "Variable name are case senitative";
var text4 = "Variable name should not be JS keyword";

document.write(
  "<h1>" +
    headingText +
    "<h1/>" +
    "<br>" +
    text1 +
    "<br>" +2 +
    text2 +
    "<br>" +
    text3 +
    "<br>" +
    text4
);

// ==========chapter 5 ==========
var num1 = 3;
var num2 = 5;
document.write(num1 + num2)
document.write(num1 - num2)
document.write(num1 * num2)
document.write(num1 / num2)

var num = "";
document.write (num)

var num = 5
document.write( num)

var result = num ++;
console.log (result)
console.log(num)

document.write(num + 7 )

var result1 = num --;
console.log (result1)
console.log(num)

console.log ((num + 7) / 3)
console.log ((num + 7) % 3)

var ticketPrice = 600
document.write ("Total Cost to buy 5 tickets  to a movie is " + ticketPrice * 5 + " PKR")

var table = 4;
document.write(
  "Table of " +
    table +
    "<br/>" +
    "4 x 1" +
    "=" +
    table +
    "<br/>" +
    "4 x 2" +
    "=" +
    table * 2 +
    "<br/>" +
    "4 x 3" +
    "=" +
    table * 3 +
    "<br/>" +
    "4 x 4" +
    "=" +
    table * 4 +
    "<br/>" +
    "4 x 5" +
    "=" +
    table * 5 +
    "<br/>" +
    "4 x 6" +
    "=" +
    table * 6 +
    "<br/>" +
    "4 x 7" +
    "=" +
    table * 7 +
    "<br/>" +
    "4 x 8" +
    "=" +
    table * 8 +
    "<br/>" +
    "4 x 9" +
    "=" +
    table * 9 +
    "<br/>" +
    "4 x 10" +
    "=" +
    table * 10
);

var temp = 25;
var temp2 = 77;
document.write(
  temp +
    "°C" +
    " is " +
    ((temp * 9) / 5 + 32) +
    " °F" +
    "<br/>" +
    temp2 +
    "°C" +
    " is " +
    ((temp2 - 32) * 5) / 9 +
    " °C"
);

var priceOfItem1 = 650;
var priceOfItem2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;

document.write(
  "<h1>" +
    "Shopping Cart" +
    "<h1/>" +
    "<br/>" +
    " Price of Item 1 is " +
    priceOfItem1 +
    "<br/>" +
    " Quantity of Item 1 is " +
    quantity1 +
    "<br/>" +
    "Price of Item 2 is" +
    priceOfItem2 +
    "<br/>" +
    " Quantity of Item 2 is " +
    quantity2 +
    "<br/>" +
    "Shipping  Charges is " +
    shippingCharges +
    "<br/>" +
    "Total cost of your order is " +
    (priceOfItem1 * quantity1 + priceOfItem2 * quantity2 + shippingCharges)
);

var Tmarks = 980;
var Omarks = 804;
document.write(
  "<h2>" +
    "Marks Sheet" +
    "<h2/>" +
    "<br/>" +
    "<br/>" +
    "Total marks: " +
    Tmarks +
    "<br/>" +
    "Marks obtained: " +
    Omarks +
    "<br/>" +
    "Percentage: " +
    (Omarks / Tmarks) * 100
);

var doller = 10;
var riyal = 25;

document.write(
  "Currency in PKR" +
    "<br/>" +
    "<br/>" +
    "<br/>" +
    "Total Currency in PKR: " +
    (doller * 104.8 + riyal * 28)
);

var num = 10
document.write (((num + 5) * 10) / 2 )

var currentYear = 2023;
var birthYear = 1993;
document.write(
  "Age Calculator" +
    "<br/>" +
    "<br/>" +
    "Current Year: " +
    currentYear +
    "<br/>" +
    "Birth Year: " +
    birthYear +
    "<br/>" +
    "Your Age is: " +
    (currentYear - birthYear)
);

var num = 2
console.log (Math.pow(num, 2))

var radius = 20;

document.write(
  "The Geometrizer" +
    "<br/>" +
    "<br/>" +
    "Radius of a circle: " +
    radius +
    "<br/>" +
    "The circumference is :" +
    (2 * 3.142 * radius) + "<br/>" + "The area is " +
    (3.142 * (Math.pow(radius, 2)))
);

var snack = "Lays";
var currentAge = 30;
var maxAge = 50;
var eatPerDay = 2;
document.write(
  "The Lifetime Supply Calculator" +
    "<br/>" +
    "<br/>" +
    "Favourite  Snack: " +
    snack +
    "<br/" +
    "Current Age: " +
    currentAge +
    "<br/>" +
    "Estimated Maximum Age: " +
    maxAge +
    "<br/>" +
    "Amount of Snacks per day: " +
    eatPerDay +
    "<br/>" +
    "You will need " +
   ( (maxAge - currentAge) * eatPerDay) + " "+
    snack +
    " to last  you until the ripe old age of " +
    maxAge
);
