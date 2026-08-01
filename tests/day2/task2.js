// 1. Create a function named that takes a number as a parameter.
// 2. Declare and initialize the variable.
// 3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
// and to handle the case when the number is zero.
// 4. Return the corresponding string value for each case.
// 5. Call the function and print the result.

function typeOfNumber(num)
{
    switch(true)
    {
        case num > 0:
            console.log("The number is greater than 0");
            break;

        case num < 0:
            console.log("The number is less than 0");
            break;

        case num === 0:
            console.log("The number is zero");
            break;
    }
}

let a = 0;
let b = 5;
let c = -5;

typeOfNumber(a);
typeOfNumber(b);
typeOfNumber(c);