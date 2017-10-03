"use strict";

var namesToAges = {
    'Alyssa': 22,
    'Charley': 25,
    'Dan': 25,
    'Jeff': 20,
    'Kasey': 20,
    'Kim': 20,
    'Morgan': 25,
    'Ryan': 25,
    'Stef': 22
};


function findRarestValue(obj) {
    var tallied = {}; // Empty array for holding the ages (key) and frequency count (value)
    var result = { // Default values for most frequent age (age) and how many times it appears (freq)
        age: 0,
        freq: Number.POSITIVE_INFINITY
    };

    for (var name in obj) {

        if (tallied[obj[name]]) { // Check for existence of key in object, increments freqency total if found.
            tallied[obj[name]] += 1;
        } else { // Generates key in tallied object and sets frequency to 1
            tallied[obj[name]] = 1;
        }
    }


    for (var i in tallied) { // Iterates through ages returned by the previous loop and checks for most frequent
        //TODO: Correctly handle matching frequency totals

        if (tallied[i] <= result.freq) {
            result.age = i;
            result.freq = tallied[i];
        }
    }
    return result.age; // Returns a string of the correct age.
}

function findRarestKeys(obj) {
    // uses the previous findRarestValue function and then returns a list of names with that age.
    var rarest = Number(findRarestValue(obj)); // holds rarest age from the passed object
    var results = []; // empty array will hold the list of names

    for (var i in obj) { //iterates through object and compares the age to the established rarest value
        if (obj[i] === Number(rarest)) {
            results.push(i) // Appends name to result list
        }
    }
    return results;
}

console.log("Hello Testing");
console.log("The rarest key is: " + findRarestValue(namesToAges));
console.log("The keys with that value are: " + findRarestKeys(namesToAges));

console.log("Lodash: " + _.filter([1, 2, 3, 4, 5 ,6], function (num) {
    return num % 2 === 0;

}));


