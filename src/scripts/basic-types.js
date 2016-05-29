/**
 * Created by Naveen on 5/29/2016.
 * In this file I will demonstrate all the basic types available in TypeScript.
 */
//String
let name = "Naveen Kumar";
//Number
let age = 29;
let weight = 72.2;
// Boolean
let likeMovies = true;
//Array
let favNumbers = [3, 9, 18];
let favMovies = ["3 Idiots", "Avengers", "X-Men"];
// Tuple - where type of fixed number of array is known,but need not to be same;
//Declare a tuple like this
let myRatings;
//Initialize it
myRatings = [9.2, "3 Idiots"];
//Enum
export function printVars() {
    return `I am ${name}, ${age} years old. I weight ${weight} kgs.` +
        `  My favorite numbers are ${favNumbers}. Do I like movies: ${likeMovies}.` +
        ` My favorite movies are ${favMovies}. I gave rating of ${myRatings[0]} to ${myRatings[1]}.`;
}
