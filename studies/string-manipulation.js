/* 
    String Manipulation:
    
    0. String manipulation is changing a string with either operators or premade methods.
    
    1. You can use the addition operator on strings as well as numbers. 
        ex. */ console.log('my ' + 'string'); // console logs the string "my string".
/*
    2. Other ways to change strings are called string methods.
        ex. */
        let string = 'Hi, im a string'
        
        console.log(string.charAt(0))//prints a character at the index indicated in this case its 'H'
        
        console.log(string.split(','))//prints an array of strings that separate at the given points such as a space or a camma. this would print ['Hi', ' im a string']
        
        console.log(string.slice(3))// prints all characters after the index indicated and can stop at the second index indicated. this would print 'im a string'
        
        console.log(string.toUpperCase()) // prints the string with all uppercase letters. this prints 'HI, IM A STRING'
        
        console.log(string.toLowerCase()) // prints the string with all lower case letters. this prints 'hi, im a string'
        
        console.log(string.substring(0, 2)) // prints the characters from the first index provided and the number of indexes indicated after . this would print 'Hi'