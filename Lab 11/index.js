// given:
let users = ["George", "Peter", "Ada", "Maria"];

// Task 1: list users sorted by first letter, ascending
console.log(`~~~Task1~~~`);
// <--- YOUR CODE HERE --->

let sortedUsers = users.sort().join("\n");
console.log(sortedUsers);
// second way
let newArr = [];
users.forEach( el => newArr.push(el));
console.log(newArr);
// DESIRED OUTPUT:
// ~~~Task1~~~
// Ada
// George
// Maria
// Peter

console.log(`~~~Task2~~~`);
// Task 2: list users sorted by letters count (length), ascending
// <--- YOUR CODE HERE --->
let sortByLength = users.sort(function(a,b){
    return a.length - b.length
});

console.log(sortByLength.join("\n"));
// DESIRED OUTPUT:
// ~~~Task2~~~
// Ada
// Peter
// Maria
// George


// HINT: check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort