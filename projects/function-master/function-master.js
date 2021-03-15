//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //first we have to loop through an object so we can test each value to determine if the value is a string then we need to return all the string values as strings with a space.
    let strs = []
    for (var value of Object.values(object)) {
        if (typeof value === 'string') {
            strs.push(value)
        }
    }
    return strs.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array'
    }
    if (typeof collection === 'object') {
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.substring(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let words = string.split(' ')
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }
    return words.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return 'Welcome ' + capitalizeWord(object.name) + '!'
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species)
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.noises && object.noises.length > 0) {
        return object.noises.join(' ')
    }
    else return 'there are no noises'
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.split(' ').includes(word)) {
        return true
    }
    else return false
    // let arr = string.split(' ')
    // for (let i = 0; i < arr.length; i++){
    //     if (arr[i] === word) {
    //         return true
    //     }
    //     else return false
    // }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    //we can easily do this by using the .push method
    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.friends) {
        for (let i = 0; i < object.friends.length; i++) {
            if (object.friends[i] === name) {
                return true
            }

        }
    }
    return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //first we will need to make an empty array to fill 
    //we can do this by looping through the array, removing the name given from the array, and then all names in the friends array from the array of people
    var nameList = [];
    var result = [];
    var current = null;
    for (var i = 0; i < array.length; i++) {
        if (name === array[i].name) {
            current = array[i];
        }
        else {
            nameList.push(array[i].name);
        }
    }

    if (current === null) {
        return nameList;
    }

    for (var i = 0; i < nameList.length; i++) {
        if (current.friends.indexOf(nameList[i]) == -1) {
            result.push(nameList[i]);
        }
    }

    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //if the object does not contain the key, we need to add it with the value
    //if it does have the key but the value is different then we need to change the value 
    if (object.hasOwnProperty(key)) { // hasOwnProperty method checks to see if the key is in the object.
        object[key] = value; // will change the  value of the key in that object
        return object;
    }
    else {
        object[key] = value; // will create a new key and will assign value
        return object;
    }
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (let i = 0; i < array.length; i++) {
        delete object[array[i]]
    }
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
let unique = [...new Set(array)]
return unique
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
