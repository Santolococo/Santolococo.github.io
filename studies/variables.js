/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* 3. var is not the only way we can make variables. we can also use 'let' and 'const'. 
    while using these work the same as var does when it comes to initializing them, they have different rules for scope, hoisting and re- assignment.
    
    4. while var has a global scope, let is block scoped, and const can be global or block scoped. this means they can only be accessed in the block of code they are created in. 
    this can prove useful if you will want to use the same keyword later in your code and it not be affected by the code above or below.
    
    5. in addition to being block scoped const is also a constant variable meaning that it can not be reassigned after it has been initialized.
    this is usefull for things we might not want to change like birthdays, or holidays, or maybe a name of a person.
*/

// 4. let and const //
let plant = 'oak';
//let can be re-assigned.//
plant = 'rose';
console.log(plant);
//this would equil 'rose' //

const santoBirthday = '12/08/1994';
//can not be re-assigned//

santoBirthday = '01/30/1954';
console.log(santoBirthday);
//this would print '12/08/1994'//

/* 6. As one final differenct in these assignment operators. var unlike the others is hoisted. this means that once it is declared it can be used anywhere in the code even 
    if it is made before we first use the keyword.
*/