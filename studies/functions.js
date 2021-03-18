/*
    Functions:
    
    0. Functions are logic data that can be used over and over to make changes to our code or do any number of other things.
    Functions can be named or unnamed(anonomous) or even initialized by themselves. they are like a set of instructions used to
    make specific changes, find things, create things.
    
    1. the fist step in using functions is declaring a function.
        ex.
*/
    //here we have a function that has been declared as a variable (print)
        let print = function(stuff){
            console.log(stuff);//this is a functions thats job is to print its input to the console. 
        }
    //we can also make functions without variables
        function sayCheese(smile){
            console.log(smile);
        }
/*
    2. the second step in using funciton is to initialize it.
        ex.
*/
        print('sup');//'sup' will be printed to the console. nothing else is needed other than the function.
/*
    3. When we declare a function, we pass in parameters the the function will take in order to fullfil the function. in the above function the parameters section is 'stuff'. 'stuff' in
    this case is just a placeholder for the input we will use when we initialize the function. the thing/things we will pass in will be our arguments. so above our argument is the string 'sup'.
    this parameters section can have any number of inputs even none. If we do put inputs, not all parameters will need to filled in to make the function work. 
    
    4. Function operate in the global scope. inside of the function itself is an inner scope called function scope. this means that functions can have variables or other functions inside of
    them that will only be accessable from inside the function itself. 
        ex.
*/ 
    //global scope
    let a = 10
    function canAccessA() {
        a = 52//this will change the variable a that is in the global scope
    }
    console.log(a)//this will print 10 because the function has not been called
    canAccessA()//this initializes the function
    console.log(a)//this will now print 52 after function call
    
    //funciton scope
    function hasA(){
        let b = 13
        console.log(b)//the function call will print 13
    }
    //console.log(b)//will throw referenceError: b is not defined
/*
    5. Closure is when a function references variable in its parent scope like 'canAccessA' above.
*/
    