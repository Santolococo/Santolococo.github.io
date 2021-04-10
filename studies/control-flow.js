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
    let tree = "tall"// set the variable
    if(tree === 'short'){// if the tree had the value of short this would be returned and the rest of the code would not be read
        console.log('short')
    }
    else if(tree === "tall"){//this code will stop the code from being read and console.log tall 
        console.log('tall')
    }
    else return 'the tree is average'//this code will not be reached because the code will stop.
    
    //this code will print 'tall'
    
/*
    2. Swith statements have predetermined returns depending on the input value
        ex. 
*/
let month = 3;
switch (month) {//this switch statement goes through the months in numerical order. each month has a number and so this code will return the month name associated with the number.
  case 1:
    console.log("January");//january is the first month
    break;
  case 2:
    console.log("February");//february is the sencond
    break;
  case 3:
    console.log("March");// march is the third and will be logged.
    break;
  default:
    console.log("I cant tell anymore with this pandemic");//this code will not be returned.
}
//this code will return 'March'