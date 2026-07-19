// 1. Create a function named `isOddOrEven` that takes a number as a parameter
// 2. Declare and initialize the variable
// 3. Use a conditional statement to check if the number is divisible by 2
// 4. Call the function and print the result

function isOddOrEven(num)
{
    if(num % 2 === 0)
    {
        console.log(num + " is an even number");
    }
    else
    {
        console.log(num + " is an odd number");
    }
}

let a = 5;
let b = 10;
let c = 15;
let d = 20;

isOddOrEven(a);
isOddOrEven(b);
isOddOrEven(c);
isOddOrEven(d);