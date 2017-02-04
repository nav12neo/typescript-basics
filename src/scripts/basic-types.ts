/**
 * Created by Naveen on 5/29/2016.
 * In this file I will demonstrate all the basic types available in TypeScript.
 */

//String
let name:string = "Naveen Kumar";

//Number
let age:number = 29;
let weight:number = 72.2;

// Boolean
let likeMovies:boolean = true;

//Array
let favNumbers:number[] = [3,9,18];
let favMovies:Array<string> = ["3 Idiots","Avengers","X-Men"];

// Tuple - where type of fixed number of array is known,but need not to be same;
//Declare a tuple like this
let myRatings :[number,string];
//Initialize it
myRatings = [9.2,"3 Idiots"];

//Enum
enum Sports {'Cricket' = 1,'Table Tennis','Vollyball','Basketball'};
let cricketIndex = Sports.Cricket;
let secondGame = Sports[2];

//Any - when you are not sure about its type.
let notSure:any = false;
notSure = 10;
notSure = "Really I am not sure!!";

// Void - mostly seen as return type of a function.
function alertMessage() :void {
    alert("Its an alert. Move fast !!!")
}

// Type assertions - when user know about type of a variable more than TS.
let newVal:any = "New String";
let newValLength:number = (<string>newVal).length;
let newValLength2:number = (newVal as string).length;


export function printVars () {
    var moviesSummary = (likeMovies)? ` My favorite movies are ${favMovies}. I gave rating of ${myRatings[0]} to ${myRatings[1]}.`:``
    alertMessage();
    return `I am ${name}, ${age} years old. I weight ${weight} kgs.` +
        `  My favorite numbers are ${favNumbers}.` + moviesSummary+
        ` I play ${Sports[3]} and ${secondGame}, but cricket is always ${cricketIndex}st choice for me`;
}