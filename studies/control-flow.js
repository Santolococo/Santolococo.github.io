/*
    Control-Flow:
    
    0. Control-Flow is like the order of operations of code. It is the order in which the code is run through in order to get the expected outcome.
    we can control the flow of the code using if, else if, else, and switch statements.
    
    1. if statements are the start of if, else if, and else statements. meaning that you can not use else if or else if you dont already have an if statement
    if statements test for truthyness. if the statement tests true, they code after the if statement will be used. if it tests false the code will not be run
    that is when else if and else come into play. else if is for potential other codes. else is like a last resort code that will be run if all the if and
    else if codes test false.
        ex.
*/
    let tree = "tall"
    if(tree === 'short'){
        console.log('short')
    }
    else if(tree === "tall"){
        console.log('tall')
    }
    else return 'the tree is average'
    
    //this code will print 'tall'
    
/*
    2. Swith statements have predetermined returns depending on the input value
        ex. 
*/
let month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("I cant tell anymore with this pandemic");
}
//this code will return 'March'