// 1. Write a function named `factorial` that accepts an argument `n`, which is a non-negative integer,
// and returns its factorial. 

// 2. Include a check to ensure that the factorial is not computed for negative numbers. If a negative 
// number is passed, the function should throw an error. 

// 3. Use a loop to compute the factorial. Initialize a result variable and multiply it by each integer 
// from 2 up to `n`. 

// 4. Include example calls to the `factorial` function with different integers to demonstrate the 
// function’s functionality. Include at least one example where an error is thrown due to a negative 
// input.

function factorial(n: number): number
{
    let fact = 1;

    if(n < 0)
    {
        throw new Error('Input must be a non-negative integer.')
    }

    else if(n ===0 || n === 1)
    {
        fact = 1;
    }

    else
    {
        for(let i = 1; i <= n; i++)
        {
            fact *= i;
        }
    }


    return fact;
}

let firstValue: number = factorial(3);
let secondValue: number = factorial(4);
let thirdValue: number = factorial(5);

console.log(`${firstValue},\n${secondValue},\n${thirdValue}`);
