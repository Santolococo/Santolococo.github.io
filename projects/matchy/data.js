/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = 'dog'
animal['name'] = 'Tim'
animal.noises = []
console.log(animal)


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = []

noises[0] = 'bark'
noises.push('howl')
noises.unshift('woof')
noises.push('yip')



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises
animal.noises.push('growl')
console.log(animal)

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = []
animals.push(animal)
var duck = { 
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
}
animals.push(duck)
console.log(animals)
var capybara = {
    species: 'capybara',
    name: 'Gerald',
    noises: ['squeel', 'snort', 'yip', 'grunt']
}
animals.push(capybara)
var panda = {
    species: 'panda',
    name: 'Paulo',
    noises: ['coo', 'snort', 'sneeze', 'growl']
}
animals.push(panda)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//because we are making a list of friends. i will use an array because it has an index which may prove helpful with sorting or other processes that might need to be done.
var friends = []

function getRandom(array) {
   let i =  Math.floor(Math.random() * animals.length);
  return friends.push(animals[i].name);
}
getRandom(friends);
    console.log(friends);
    duck["friends"] = friends;
    console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}