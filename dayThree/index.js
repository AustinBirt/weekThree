// for (let x=10; x>0; x--){
//     if (x%2!=0){
//         console.log(`${x} is odd`)
//     }
// }
// //Output only odd Number

// for (let x=10; x>0; x--) {
//     if (x%2===0){
//         console.log(`${x} is even`)
//     }
// }
// //This prints only even numbers

// for (let x=6; x<61; x += 3){
//     console.log(x)
// }

// //requirement is to output multiples of 3, starting at 6 and ending at 60

// for (let symbol= 1; symbol<8; symbol+=1){
//     switch(symbol){
//         case 1: console.log("#")
//         break;
//         case 2: console.log("##")
//         break;
//         case 3: console.log("###")
//         break;
//         case 4: console.log("####")        
//         break;
//         case 5: console.log("#####")
//         break;
//         case 6: console.log("######")
//         break;
//         case 7: console.log("########")
//         break;
//         default: console.log("somthing is wrong with your code")
//     }   
// }

// //output an increasing number of # symbols, from 1 to 7. I did it!
// //it wasn't required but i did a switch statement and remembered 
// //the syntax on my first try

// for (let x=1; x<21; x+=1){
//     // switch(x){ 
//     //     case 1:console.log('odd')
//     //     break;
//     //     case 3:console.log('odd')
//     //     break;
//     //     case 2: console.log('even')
//     //     break;
//     //     case (`${x}%${x}===1`): console.log('prime')
//     //     break;
//     //     case x%2===0: console.log('even')
//     //     break;
//     //     case (x%2!=0): console.log('odd')
//     //     break;
//     //     default:console.log('something happened')
//     // }
//     if (x%x===1){
//         console.log('prime')
//     }}

// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }
// let x = 30;

// while (x > 0) {
// 	x /= 2;
// 	x--;

// 	if (x % 1 != 0) {
// 		break;
// 	}
	
// 	console.log(x);
// }



// let output="";
// for (let i=1; i<=7;i++){ //you just need it to increment 7 times so any initialization and condition will work)
//     output += "#"; //this is "incrementing the variable by a hashtag symbol, or its concatenating by a hashtag"
//     console.log(output); //this outputs the current state of the output, which is 1 hashtag after the first iterative, 2 after 2nd, etc.
// }

//teachers code for the answer above
//you can increment by a string amount

// let name= "Austin"
// for (let i = 0; i<10; i+=1){
//     name+='a'
//     console.log(name);
// }


// let number = 100;
// while (number>-1) {
//     console.log(number);
//     number-=1;
// }

// let number = 0;
// while (number<35){
//     number+=3;
//     // if (number===36){
//     //     break;}
//     // else if(number===30){
//     //     continue;
//     // }
//     console.log(number);
// }


// let number=0;
// while (number <100) {
//     number+=5;
//     console.log(number);
// }

// let number= 0;
// while (number<21){
//     if (number%2===0){
//         console.log(number*3);
// }
// number+=1;
// }


// let number=0;
// while(number<10){
//     if (number%2===1){
//         console.log(`${number}This is odd`)
//     }
//     number+=1;
// }


// for (let i=0; i<string.length; i++ ){
//     if (i<string.length){
//         i*-1;
//         console.log(i);
//     }
//     console.log(string[i]);



// //FINALLY GOT IT
// let string="Austin";
// for (let i=string.length; i>=0;i--){
//     console.log(string[i])
// }

// for (let i=1; i<=10; i++){
//     let value =i;
//     console.log(value);
//     number++;
// }
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log("The sum of numbers from 1 to 100 is:", sum);


// let number=3;
// for (i=0; i<20; i)


// for (let i=10; i>0; i--) {
//     console.log(i)
// }

// for(let i=1; i<=10; i++){
//     if (i%2===1){
//         console.log(i)
//     }
// }

// let myString="Hello, Austin Birt."
// for (let i=0; i<10; i++) {
//     if (i%2===1){
//         console.log(myString[i])
//     }
// }

// let number = 10;
// for (i=10; i>0;i--){
//     if(i%2===0) {
//         console.log('This is even')
//     }
//     number--;
// }

// console.log(number);
//to decrement you can either print the value provided by i, or have it affect another variable.

// let variable ="Angela keeps bothering while i study"
// for (let i=0; i<variable.length; i++) {
//     console.log(i);
// }


// let borderColor="Yellow"
// for (let i=borderColor.length; i>=0; i--){
//     console.log(borderColor[i])
// }

// let array = ["egg", "yolk", 'crack'];
// for (let words in array){
//     console.log(words)
// }
// const str = "Hello World";

// for (const c of str) {
//     console.log(c);
// }

// let string="Hello World!"
// let vowels = 0;
// for (i=0; i<string.length; i++){
//     if (string[i]==="a" || string[i]==="e" || string[i]==="i" || string[i]==="o"||string[i]==="u"){
//         vowels += 1;
//     }
// }
// console.log(vowels)

// //This was the first practice question from Chatgpt, I excelled at it


// let heading="Javascript";
// let reverseHeading="";
// for (let i = heading.length-1; i>=0; i-- ){
//     reverseHeading+=heading[i];
// }
// console.log(reverseHeading);

// //this is question 2 presented by chatgpt :write a for loop that prints the reverse of a given string
// //I had to get start at the length of the string but subtract one because it counts the length of 10
// //but theres no indexed item at the 10th spot because strings begin at 0. I can't
// //just change the condiition becasue we still need to return the zero indexed item to the new variable.


// let number=0;
// let totalSummation=0;
// for (let i=0; i<=100; i++) {
//     totalSummation+=i;
// }

// console.log(`Your summation of all your numbers = ${totalSummation}`);

// //This is similar to the example above, we needed to set a separate variable that we can access inside the
// //loopp, but that we can also store our values in, each time its added to will change the variable value
// //so when you console log it after the for loop, you are able to print its accumulated value.


// let palindrome="dog"
// let isThis ="";
// for (let i=palindrome.length-1; i>=0; i--){
//     isThis+=palindrome[i]
//     if (isThis.length===palindrome.length){
//             if(isThis===palindrome){
//                 console.log("this is a palindrome!")
//                                     }
                                            
//             else{console.log("this isn't a palindrome")}
//                 }
//         }
// //Chat gpt question was to check if a given string is a palindrome.(reads same back and forward)
// //solved this without help. I learned that you need to reverse the original string into a new string.
// //you do this by setting  your loop variable to the length of the original string -1 becasuse lengths
// //are always one longer than the indexed location. (length counts each spot as one, index counts first spot as zero)
// //Then, because palindromes are the exact same once they are the exact length, you need to check whether
// //they are the same length yet. Once they are, you need to then check if they are exactly equal to eachtoher.
// //if they are, then you need to print it's a pallindrome to the screen.
// //if the words are the same length(whcih they always will be the way i print the reverse), but they
// //aren't the palindromes of eachother, it will print, this isn't a palindrome.


// let variable=0;
// while (variable<10){
//     variable+=2;
// }

// console.log(variable);

// let a=1;
// while (a<7){

// a+=1;
// if(a%2===0){
//     console.log(`${a} is even!`)
// }  
// else {
//     console.log(`${a} is odd!`)
//     }
// }

// let random=0;
// while (random<=20){
//     random+=1;
//     if(random%2===0){
//         console.log(random*3);
//     }
//     else{
//         continue;
//     }
// }

// let cookie=4;
// let money=10;
// let yourChangeInQuarters= 0;
// while(money>=cookie){
//     if (money===cookie){
//         break;
//     }
//     money-=.25;
//     yourChangeInQuarters+=1;

// }

// console.log(yourChangeInQuarters);
// //This was a bonus question in the practice. I did this on my own and ignored the class explnation
// //it works. It counted 24 quarters equaling 6 dollars.
// //i used, decrement by amount of quart until reaching price of cookie, then every .25 i added 1 to
// //"quarters" variable. Then at the end the quarters variable is storing the exact amount i need
// //so i print it. If i don't break it will print one more quarter

// let height=1
// while(height<=10){
//     if(height%2===0){
//         console.log(height)
//     }
//     height+=1;

// }
// for(i=1; i<=10; i++){
//     if (i%2==0){
//         console.log(`2x${i}=${i*2}`);
//     }
// }


// let i = 0;
// let sum=0;
// while(i<100){
//     i++;
//     sum+=i;
// }

// console.log(sum)
// //WHile loop the SAME AS
//for a while looop the loop variable must be set outside the loop


// let sum=0;
// for (let i=0; i<=100; i++){
 
//     sum+=i
// }
// console.log(sum)

// //This is the same as the while loop with a for loop. The difference is you must define the 
// //number of loops to do with while loop by setting a new variable outside the loop.
// //because of scope issues with the for loop, you must 