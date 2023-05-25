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

for (let x=1; x<21; x+=1){
    switch(x){ 
        case 1:console.log('odd')
        break;
        case 3:console.log('odd')
        break;
        case 2: console.log('even')
        break;
        case (x%x===1): console.log('prime')
        break;
        case (x%2===0): console.log('even')
        break;
        case (x%2!=0): console.log('odd')
        break;
        default:console.log('something happened')
    }
}