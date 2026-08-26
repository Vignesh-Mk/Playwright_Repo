// 1. Implement a function named `fibonacci` that accepts an argument `n`, which is a non-negative integer, and returns the nth Fibonacci number. 
// 2. Use a loop to compute the Fibonacci number. Initialize two variables to store the first two Fibonacci numbers and update these iteratively up to `n`. 
// 3. Provide example calls to the `fibonacci` function with different integers to demonstrate the function’s functionality.

function fibonacci(n: number): number 
{
    if (n < 0) 
    {
        throw new Error("Input must be a non-negative integer."); // To display the non negative error and terminate the execution
    }
    if (n === 0)
    {
        return 0;
    } 
    if (n === 1)
    {
        return 1;
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) 
    {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
}

const firstValue = fibonacci(10);
const secondValue = fibonacci(20);
const thirdValue = fibonacci(30);

console.log(`${firstValue},\n${secondValue},\n${thirdValue}`);
