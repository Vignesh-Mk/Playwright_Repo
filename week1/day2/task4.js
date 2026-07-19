// 1. Create a function that takes a student's score as a parameter.
// 2. Declare and initialize the variable.
// 3. Use `switch` statement inside the function.
// 4. Return the corresponding grade.
// 5. Call the function and print the result.

function getGrades(score)
{
    switch(true)
    {
        case score >= 90:
            console.log("Grade: A");
            break;

        case score >= 80:
            console.log("Grade: B");
            break;

        case score >= 70:
            console.log("Grade: C");
            break;

        case score >= 60:
            console.log("Grade: D");
            break;

        default:
            console.log("Grade: F");
    }
}

let score1 = 95;
let score2 = 80;
let score3 = 73;
let score4 = 68;
let score5 = 45;

getGrades(score1);
getGrades(score2);
getGrades(score3);
getGrades(score4);
getGrades(score5);