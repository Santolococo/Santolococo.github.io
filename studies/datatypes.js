/* 
    Datatypes:
    
    0. Datatypes refer to the type of data a value has. These datatypes come in two forms. Simple datatypes and complex datatypes.
    
    1. Simple datatypes are atomic, immutable. they can not hold other values or data inside of them. We can do simple procedures on them like adding two numbers together or
    changing what is in a string. However this does not change thier original 'value'. These datatypes include:
        Number: numeric data
            ex. 
*/      
console.log(1)
/*
        String: character data
            ex. 
*/
console.log('abc')
/*
        Boolean: true or false
            ex. 
*/
console.log(true)
/*
        NaN: not a number but tests as a number when inspected.
            ex. 
*/
console.log(NaN)
/*
        Undefined: has no value
            ex.
*/
console.log(butter) //has not been declared and will print 'undefined'
/*
        Null: has no value but is ment to not have value
            ex. 
*/
console.log(null)
/*
        
    2. Simple datatypes are copy by value. this means that any changes that are made to these values will be seen anywhere we call them. 
    this means that they do not change if you refer to them ouside of a scope that was used to change them. so if you were to use a function to change
    the value of a complex datatype then later used the datatype again. the value would be the unchanged one.
*/
let number = 10

function increase(number){
    number++;
}
increase(number)
console.log(number)//this will print 10 still.//

/*
    
    3. Complex datatypes can take many values inside of them and can have an unlimited number of items inside of them. these datatypes include:
        Arrays: an indexed list of items that can be any simple data type or other complex datatypes.
            ex. 
*/
            let array = ['ball', null, true, {name: Santo}]
/*
        objects: a non-indexed group of items.
            ex. 
 */           
            let object = { ball: round, box: cube}
 /*           
        functions: functions have parameters that are filled in with arguments in order to do any number of things. ussually used to make changes to code.
            ex. 
*/            
            function func(){
            console.log('im a function.')
                
            }
/*
    4. Complex datatypes are copy by reference.  this means that any changes that are made to these values will be seen anywhere we call them.
    
*/

    
let obj = { number: 10 }



function increase(obj){
    obj.number++;
}
increase(obj)
console.log(obj)// will print 11//


/* 
    5. Bonus!!! one more datatype! infinity/ -infinity 
    well not really. its just a number... in the sense that it is numeric data. infinity simply has a higher value than any other number while -infinity has a lower value.
*/

const maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log('Let\'s call it Infinity!');
  // expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// expected output: 0
/*
    6. Objects can be accessed by using dot notation or bracket notation.
*/
let stuff = {
    people: "americans",
    place: "USA",
    thing: "flag"
}

console.log(stuff.people)//returns 'americans'
console.log(stuff['place'])//returns 'USA'