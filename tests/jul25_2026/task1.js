// Task 1: Function Declaration
// Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,
// <name>!" to the console.

// Task 2: Arrow Function
// Create an arrow function named `double` that takes a number as a parameter and returns
// double its value.

// Task 3: Anonymous Function
// Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
// after 2 seconds.

// Task 4: Callback Function
// Create a function named `getUserData` that takes a callback function as a parameter. Inside
// `getUserData`, simulate fetching data with `setTimeout` and then call the callback function
// with a user object after 3 seconds.
// Call the `getUserData` function and log the user's name and age using the callback function.

// Task 1:
function userProfile(name)
{
    console.log(`Hello, ${name}!`);
}

//Task 2:
const double = (num) => 
    {
        num = num * 2

        return num;
    };

//Task 3:
let delay3 = 2; // in seconds
setTimeout(() =>
    {
        console.log(`This message is delayed by ${delay3} seconds`)
    }, 
    delay3 * 1000
);

// Task 4:

let userData = [{ name: "Vignesh", age: 26 }];
let delay4 = 3; // in seconds
function getUserData(callback)
{
    setTimeout(() =>
    {
        callback(userData[0]);
    }, 
    delay4 * 1000)
}

// Outputs:
userProfile("John Doe");
console.log(double(5));
getUserData((user) =>
{
    console.log(`User's name is ${user.name} and age is ${user.age}`);
});