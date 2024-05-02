// My Age
var currentYear = 2024 ;
var yearofBirth = 1992 ;
var myAge = currentYear - yearofBirth ;
console.log(myAge);
// Area of a Rectangle
var length = 7 ;
var width = 10 ;
var Area = length * width ;
console.log(Area);
// Area of a Circle
var radius = 5 ;
var area = Math.PI * radius * radius;
console.log(area)
// Area of Cube
var sideLenght = 5;
//var area = 6s^2 ;
var cubeArea = 6 * sideLenght * sideLenght ;
console.log(cubeArea);
// Fahrenheit to Celsius
var Fahrenheit = 100 ;
var Celsius = (Fahrenheit - 32) * 5/9 ;
console.log(Celsius);
// celsius to Farrenheit
var Celsius2 = 50.78;
var Fahrenheit2 = (Celsius2*9/5) + 32 ;
console.log(Fahrenheit2);
// Seconds to minutes
var totalSeconds = 200 ;
var minutes = totalSeconds / 60 ;
console.log(minutes);
var Seconds = totalSeconds % 60 ;
console.log(Seconds);
// calculation of Percentage
var number = 68 ;
var total = 200 ;
var percenTage = (number/total) * 100 ;
console.log (percenTage);
// Days into weeks
var totalDays = 80 ;
var weeks = totalDays/7 ;
var remainingDays = totalDays % 7 ;
console.log(weeks , remainingDays);
// Increment and Decrement Operator
// Q.1
var a = 2 ;
var b = ++a*2;
console.log(b);
// Q.2
var x = 5;
var y = x-- + 2;
console.log(y);
// Q.3
var x = 3;
var y = ++x + x++ + ++x;
console.log(y);
// Q.4
var m = 2;
var n = ++m*m++*--m;
console.log(n);
// Q.5 
var a = 3;
var b = 5;
var result = ++a + b-- - a++ + --b;
console.log(result);
// Q.6
var m = 2;
var n = 4;
var p = m++ + ++n - --m + n--;
console.log(p);
// Q.7
var a = 5;
var b = 3;
var c = 2;
var d = 7;
var result = ++a*(b-- + c)/--d;
console.log(result);
// Q.8
var m = 2;
var n = 3;
var o = 4;
var result = m++*(--n+m)/(o-- - n);
