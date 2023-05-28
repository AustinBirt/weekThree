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



//Wild Life Question
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//1.Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee.splice(2,1, "4999")
console.log(plantee);
//2.Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3]="Gotham City"
// wolfy[wolfy.lastIndexOf("Yukon Territory")]="GothamCity"
wolfy.splice(wolfy.indexOf('Yukon Territory'), 1, "Gotham CiTY")
console.log(wolfy);
//3.Give D'Art a second hometown by adding "Hawkins"
let dartUpdated=dart.concat();
dartUpdated.push('Hawkins');
console.log(dartUpdated);
//4.Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// wolfy.shift();
// wolfy.unshift('GameBoy')
wolfy.shift();
wolfy.splice(0, 0, 'GameBoyYYY')
console.log(wolfy);

//THIS IS ME EPERIMENTING, I UNDERSTAND THE MOST EFFICENT WAY TO DO THESE




//Yell at the Ninja Turtles Question




//Methods Revisited Question




//Where is Waldo Question





//Excited Kitten Question




//Find the Median Question





//Hungry for more? Questions
//Alien Atire Question





//Dress Us Up Question





//Dirty Laundry Question





//inventory Question