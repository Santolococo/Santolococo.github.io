// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./santolococo.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let males = _.filter(array, function(customerObj){
    return customerObj.gender === 'male'
})
return males.length
// return _.filter(array, function(customerObj){  // this is how i thought to solve this be
//      return customerObj.gender === 'male'
//  }).length
};

var femaleCount = function(array) {
    let females = _.reduce(array, function(count, customer){
        if(customer.gender === 'female'){
            count += 1
        } 
        return count
    }, 0)
    return females
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(old, customer){
        if(!old){
            old = customer
        }
        else if(old && customer.age > old.age){
            old = customer
        }
        else if(old && customer.age <= old.age){
            old = old
        }
        return old
    }).name
    return oldest
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(young, customer){
        if(!young){
            young = customer
        }
        else if(young && customer.age < young.age){
            young = customer
        }
        else if(young && customer.age >= young.age){
            young = young
        }
        return young
    }).name
    return youngest
};;

var averageBalance = function(array){
    let balance = _.reduce(array, function(total, customer){
        return total + parseFloat(customer.balance.replace( '$', '').replace(',', ''))
    }, 0)
    let average = balance / array.length
    return average
};


var firstLetterCount  = function(array, letter){
    let count = _.reduce(array, function(total, customer){
        if(customer.name.charAt(0).toUpperCase() === letter.toUpperCase()){
            return total + 1
        }
        return total
    }, 0);
    return count
};

var friendFirstLetterCount = function(array, customer, letter){
    let lists = _.filter(array, function(customerObj){
        return customerObj.name === customer
    })[0].friends
    let count = _.reduce(lists, function(total, customer){
        if(customer.name.charAt(0).toUpperCase() === letter.toUpperCase()){
            return total + 1
        }
        return total
    }, 0)
    return count
};

//make a function that takes an array and a name

var friendsCount = function(array, name){
//we need to search through the friends array in each object which is also full of objects. 
//if the customer with the provided name is in another customers friends list we need to add them to the accumulator array.
    // let hasFriend = _.reduce(array, function(whoHas, customer){
        //the first thing i want to do inside of the reduce function is check each objects friends list array of object to see if the name appears in the list.
        //then i need to add the name of the person who has that friend in their friends list to the accumulator.
//         if(_.filter(customer.friends, function()))
//          whoHas.push(customer.name)
//          return whoHas
//     }, [])
//     return hasFriend
// };
let hasFriend = _.filter(array, function(customer){
    for(let i = 0; i < customer.friends.length; i++){
        if(customer.friends[i].name === name){
           return customer
        }
    }
})
return _.pluck(hasFriend, 'name')
};

let topThreeTags = function(arr){
    var result = [];
//assign the variable of tagsArray to a reduced version of the input array.
var tagsArray = _.reduce(arr, function(acc, curr){
    //get the tags from the current customer object and let it equal tags
let tags = curr.tags;
//concat all tags from each person into empty seed array
acc = acc.concat(tags); 
     return acc;
},[]);
// console.log(tagsArray);
//code that counts the tags and puts them in a counter object with the objects as keys and numbers as values
var tagsCountObj =_.reduce(tagsArray, function(acc, curr){
    if(acc[curr]){
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    } return acc;
}, {});
//code that gets the counters with the max value
    var getMax = object => {
        return Object.keys(object).filter(x => {
             return object[x] == Math.max.apply(null, 
             Object.values(object));
       });
    };
result = getMax(tagsCountObj);
return result;
};

var genderCount = function(array){
    return _.reduce(array, function(resultObj, customerObj){
        if(resultObj[customerObj.gender]){
           resultObj[customerObj.gender] += 1 
        }
        else {
            resultObj[customerObj.gender] = 1;
        }
        return resultObj
    }, {})
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
