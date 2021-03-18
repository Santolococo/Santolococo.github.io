/* 
    Operators:
    
    0. Operators make things happen with the data we have. There are several types of operators that have different jobs. These operators are classified by what they do and how many operands
    they take. Operands are the values that operators act on. Operators that work with one value are called unary operators. If they work with two values they are called binary operators.
    If they have three they are called ternary operators.
    
    1. The different types of operators include:
        Assignment: used to assign value
            ex. =
*/
let bear = 'grizzly'
/*
        Comparison: used to compare values
            ex. >, <, >=, <=
            5 > 4
        Arithmatic: used to do simple mathmatical procedures
            ex. +, -, /, *, %
            5 + 4 = 9
        Logical: these are the AND, OR, and NOT operators
            ex. &&, ||, !
*/
if (bear === 'grizzly' || bear === 'polar'){
    console.log(true)
}
/*
        Unary: use a single operand
            ex. delete, void, typeof
*/
function removeProperties(object, array) {
    for (let i = 0; i < array.length; i++) {
        delete object[array[i]]
    }
    return object
}
/*
        Ternary: a conditional that is activated with '?' then has a value for a truthy and falsey value.
            ex. 
*/
function getToll(tollTag) {
    return (tollTag ? '$3.00' : '$5.00');// if tolltag tests true the charge is 3 dollars, if false the charge is 5 dollars.
}

    