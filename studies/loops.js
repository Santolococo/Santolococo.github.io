/*
    Loops:
    
    0. Loops are used to iterate through objects and arrays.
    
    1. The different types of loops are:
        For loops: used for iterating over arrays. can be iterated over backwards or forwards
        
            ex.
*/
    let range = [1, 2, 3, 4, 5, 6, 7]
    for(let i = 0; i < range.length; i++){
        console.log(range[i])
    }//loops over the array from beggining to end
    for(let i = range.length - 1; i > 0; i--){
        console.log(range[i])
    }//loops over the array from end to beggining
/*
        for in loops: used for iterating over objects. can only be iterated forwards

            ex.
*/
    let object = {
        dog: 'bark',
        cat: 'meow',
        bird: 'squawk'
    }
    for(let key in object){
        console.log(key)//will print the keys of object (dog, cat, bird)
        console.log(object.key)//will print the key values ('bark', 'meow', 'squawk')
    }
/*
        while loops: makes something happen for as long as a set condition is met.
        
            ex.
*/
    let count = 1
    while (count < 10){
        count++
    }
    console.log(count)//will print 10