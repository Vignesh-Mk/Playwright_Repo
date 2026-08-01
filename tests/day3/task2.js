// Example:1
// 1. Split the string into an array of words.
// 2. Find the last word in the array.
// 3. Calculate the length of this word.

// Example:2
// 1. Trim the String
// 2. Split the String into Words
// 3. Identify the Last Word
// 4. Calculate the Length of the Last Word
// 5. Return the length

// Example:3
// 1. Remove spaces and convert all letters to the same case
// 2. Sort the Characters
// 3. Compare Sorted Strings
// 4. Return the Result

let input1 = "Hello World";
let input2 = " fly me to the moon ";
let input3 = [{ string1: "listen", string2: "silent" }, { string1: "hello", string2: "world" }];

function example1(inputString)
{
    let arr = inputString.split(" "); // Split into an array of words
    let lastWord = arr[arr.length - 1]; // Select the last word (count starts from 0)
    console.log(`Length of the last word '${lastWord}' is ${lastWord.length}`);
}

function example2(inputString)
{
    inputString = inputString.trim();
    let arr = inputString.split(" ");
    let lastWord = arr[arr.length - 1]; //Select the last word (count starts from 0)
    console.log(`Length of the last word '${lastWord}' is ${lastWord.length}`);
}

function example3(inputStrings)
{
    // Step 1: Data extraction: Remove spaces and make values case insensitive
    let string1 = inputStrings.string1;
    let string2 = inputStrings.string2;

    string1 = string1.trim().toLowerCase();
    string2 = string2.trim().toLowerCase();

    // Step 2: Ensure alphabet characters and sort available Characters
    let sortedString1 = string1.split("").filter(char => char >= "a" && char <= "z").sort().join("");
    let sortedString2 = string2.split("").filter(char => char >= "a" && char <= "z").sort().join("");

    // Step 3: Determine if the string pair is an anagram
    // Phase 1: Check String length:
    if(sortedString1.length !== sortedString2.length)
    {
        console.log(`${inputStrings.string1} and ${inputStrings.string2} are not anagrams`);
        return;
    }

    // Phase 2: Check for frequency of letters:
    if(sortedString1 === sortedString2)
    {
        console.log(`${inputStrings.string1} and ${inputStrings.string2} are anagrams`);
    }
    else
    {
        console.log(`${inputStrings.string1} and ${inputStrings.string2} are not anagrams`);
    }
}

example1(input1);
example2(input2);
example3(input3[0]);
example3(input3[1]);