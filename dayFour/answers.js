// //Easy Going Question
// //Write a for loop that will log the numbers 1 through 20.

// for(let i=0; i<=20; i++){
//   console.log(i)
// }



// //Get Even Question
// //Write a for loop that will log only the even numbers in 0 through 200.

// for (let i=1; i<=200; i++){
//   if(i%2===0){
//     console.log(i);
//   }
// }



// //Fizz Buzz Question
// //This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and shorter.

// for (let i = 1; i<=100; i++){
//   if (i%3===0){
//     if(i%3===0 && i%5===0){
//       console.log('FizzBuzz');
//     }
//     else if (i%3===0){
//       console.log('Fizz');
//     }
//     else if (i%5===0){
//       console.log('Buzz');
//     }
//   }
//   else {
//       console.log(i);
//   }
// }



// //Wild Life Question
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// //1.Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee.splice(2,1, "4999")
// console.log(plantee);
// //2.Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// // wolfy[3]="Gotham City"
// // wolfy[wolfy.lastIndexOf("Yukon Territory")]="GothamCity"
// wolfy.splice(wolfy.indexOf('Yukon Territory'), 1, "Gotham CiTY")
// console.log(wolfy);
// //3.Give D'Art a second hometown by adding "Hawkins"
// let dartUpdated=dart.concat();
// dartUpdated.push('Hawkins');
// console.log(dartUpdated);
// //4.Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// // wolfy.shift();
// // wolfy.unshift('GameBoy')
// wolfy.shift();
// wolfy.splice(0, 0, 'GameBoyYYY')
// console.log(wolfy);

// //THIS IS ME EPERIMENTING, I UNDERSTAND THE MOST EFFICENT WAY TO DO THESE




// //Yell at the Ninja Turtles Question
// let ninjaTurtles=["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// // for (let element of ninjaTurtles){
// //   console.log(ninjaTurtles.indexOf(element));
// // }
// //Printing index with for of

// for (let element of ninjaTurtles){
//   console.log(element.toUpperCase());
// }


//Methods Revisited Question
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//1.Console log the index of Titanic.
// console.log(favMovies.indexOf("Titanic"))

// //2.Use the .sort method.
// let newList=favMovies.sort();
// console.log(favMovies);
// //3.Use the method pop.
// console.log(favMovies.pop() + ":" + " This one is my favorite")
//4.push "Guardians of the Galaxy".
// let newArray=[...favMovies];
// newArray.push('Guardians of the Galaxy');
// console.log(newArray);
// console.log(favMovies);
//5.Reverse the array.
// let copyFavMovies=[...favMovies]
// console.log(copyFavMovies.reverse());
//6.Use the shift method
// let copyFavMovies=favMovies.concat();
// console.log(favMovies.unshift('hello'));//This doesnt work, need to edit original string or make a copy of original string and edit that string, then call that string
// console.log(favMovies);
//7.Skipping,, ive done this enough
//8. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself).
// favMovies.splice(favMovies.indexOf("Django Unchained"), 1, 'Avatar');
// console.log(favMovies);
//9.slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
let arrayLength=favMovies.length;
let halfArrayLength=(arrayLength/2);
let newSlice=favMovies.slice(halfArrayLength,arrayLength);
console.log(newSlice);
console.log(newSlice.lastIndexOf('Django Unchained'));



//Where is Waldo Question





//Excited Kitten Question




//Find the Median Question





//Hungry for more? Questions
//Alien Atire Question





//Dress Us Up Question





//Dirty Laundry Question





//inventory Question