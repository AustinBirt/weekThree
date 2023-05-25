// // let num = 19;
// // if (num>=18)
// // {console.log('Access Permitted!')
// // }
// // else {
// //     console.log('Access Denied!')
// // }
// // // This code allows you to access a site if your'e of age

// // let num = 101;

// // if (num>0){
// //     if (num>=100){console.log("this is positive and greater than or equal to 100")}
// //     else {console.log("this is positive but not greater than or equal to 100")}
// // }
// // else {
// //     console.log('This is a negative number')
// // }
// // requirements for the code above that i exsclled at "nested if else.Write a nested if...else statement.
// // Declare a variable called num.
// // Add an if...else statement that checks if num is positive & greater than 100.
// // Add another statement that checks if num is positive but less than 100.
// // Add a final statement to check if num is negative."

// // let grade = "79";
// // if (grade>=90) {
// //     console.log('You recieved an A')
// // }
// // else if (grade>=80){
// //     console.log('You recieved a B')
// // }
// // else if (grade>=70){
// //     console.log('You recieved a C')
// // }
// // else if (grade >=55){
// //     console.log('You recieved a D')
// // }
// // else (grade<55){
// //     console.log('you recieved an F')
// // }

// // Requirements for this exercise that i excelled at: "(chained if else)Write an if..else statement for the following requirements:

// // If a learner gets 90 or higher: console.log("A")
// // If a learner get 80 or above: console.log("B")
// // If a learner get 70 or above: console.log("C")
// // If a learner get 55 or above: console.log("D")
// // Any grade lower than 55: console.log("F")
// // "

// // let num = 1;
// // if (num>=0){
// //     if (num===0){
// //         console.log('This number is neither positive or negative!')
// //     }
// //     else {
// //             console.log('This number is Positive!')
// //         }
// //     }
// // else{
// //     console.log('This is a negative!')
// // }
// // //same practice as above, i just wanted to account for 0

// // let age = 18
// // if (age>=18){
// //     console.log('You are granted access')
// // }
// // else {
// //     console.log('Access granted')
// // }

// // let day="tuesday";

// // if (day==="monday" || day==="tuesday" || day==="thursday" || day==="friday") {
// //     console.log("You have web development class today")
// // }
// // else if (day==="wednesday"){
// //     console.log("You have professional development today")
// // }
// // else if (day==="saturday" || day==="sunday"){
// //     console.log("Enjoy your weekend!")
// // }
// // else {
// //     console.log("Please input the day of the week")
// // }

// let x = 5;
// let y = 4;
// let operand = "*";
// switch (operand) {
//    case "+":
//        console.log(x + y);
//        break;
//    case "-":
//        console.log(x - y);
//        break;
//    case "*":
//        console.log(x * y);
//        break
//    case "/":
//        console.log(x / y);
//        break;
//    default:
//        console.log("Invalid Operand")
//        break;
// }

// //The operand is a variable here taking the value of an operand. The switch is selecting
// //the operand variable. If that is set to any of the cases below, that you set, then they 
// //execute the code that you wrote into it. The lines of code dont need to be in block


// let today="Sunny"
// let weatherOutside = (today==="Sunny") ? "nice weather" : "not the nicest of weather";
// console.log(`today is ${weatherOutside}`);

// let Sunny = true;
// let weatherOutside = (Sunny===true) ? "nice weather" : "not the nicest of weather";
// console.log(`today is ${weatherOutside}`);

// //two ways i found to write this ternary if else statement




// let today="yellow";
// let weatherOutside = (today==="Sunny") ? "nice weather" 
// :(today==="Cloudy") ? "not the nicest of weather"
// :(today==="Rainy") ? "gross out"
// :", I don't really know."; 
// console.log(`today is ${weatherOutside}`);

// //I have been doing the syntax properly and have figured out how to do ternary multi line expressions;






//the 1 in case will change based on what youre doing with the case
//statement. 


// switch(variable/expression) {
// case1: Case ends up being the "IF"
// 
// break; Break ends up being the else. The break at the end is final else
// case2:
// //The code that goes after case will execute if the case matches
//the expression
// break;
// default:
// //body


// let namee = "Jack"
// switch (namee) {
//     case "Jeff":
//         console.log(`Hi ${namee}`)
//     break;
//     case "Rick":
//         console.log(`Hi ${namee}`)
//     break;
//     case "Jill":
//         console.log(`Hi ${namee}`)
//     break;
//     case "Ronny":
//         console.log(`Hi ${namee}`)
//     break;
//     case "Jack":
//         console.log(`Hi ${namee}`)
//     break;
// }

// my code i created

// let namee="Austin"
// let result = !!namee
// console.log(result);


let name = 1;
++name;
console.log(name);