(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/**
 * Created by Naveen on 5/29/2016.
 * In this file I will demonstrate all the basic types available in TypeScript.
 */

Object.defineProperty(exports, "__esModule", { value: true });
//String
var name = "Naveen Kumar";
//Number
var age = 29;
var weight = 72.2;
// Boolean
var likeMovies = true;
//Array
var favNumbers = [3, 9, 18];
var favMovies = ["3 Idiots", "Avengers", "X-Men"];
// Tuple - where type of fixed number of array is known,but need not to be same;
//Declare a tuple like this
var myRatings = void 0;
//Initialize it
myRatings = [9.2, "3 Idiots"];
//Enum
var Sports;
(function (Sports) {
    Sports[Sports["Cricket"] = 1] = "Cricket";
    Sports[Sports["Table Tennis"] = 2] = "Table Tennis";
    Sports[Sports["Vollyball"] = 3] = "Vollyball";
    Sports[Sports["Basketball"] = 4] = "Basketball";
})(Sports || (Sports = {}));
;
var cricketIndex = Sports.Cricket;
var secondGame = Sports[2];
//Any - when you are not sure about its type.
var notSure = false;
notSure = 10;
notSure = "Really I am not sure!!";
// Void - mostly seen as return type of a function.
function alertMessage() {
    alert("Its an alert. Move fast !!!");
}
// Type assertions - when user know about type of a variable more than TS.
var newVal = "New String";
var newValLength = newVal.length;
var newValLength2 = newVal.length;
function printVars() {
    var moviesSummary = likeMovies ? " My favorite movies are " + favMovies + ". I gave rating of " + myRatings[0] + " to " + myRatings[1] + "." : "";
    return "I am " + name + ", " + age + " years old. I weight " + weight + " kgs." + ("  My favorite numbers are " + favNumbers + ".") + moviesSummary + (" I play " + Sports[3] + " and " + secondGame + ", but cricket is always " + cricketIndex + "st choice for me");
}
exports.printVars = printVars;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "<h1>Welcome to matrix world.....<br/> " + name + " welcomes you..!!</h1>";
}
exports.sayHello = sayHello;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
var basic_types_1 = require("./basic-types");
function showHello(divName, name) {
    var ele = document.getElementById(divName);
    ele.innerHTML = hello_1.sayHello(name) + "<br/><br/>" + basic_types_1.printVars();
}
showHello("hello", "Neo");

},{"./basic-types":1,"./hello":2}]},{},[3])

//# sourceMappingURL=bundle.js.map
