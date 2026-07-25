// 1. Read two strings as input. 
// 2. Compare the strings in a case-insensitive manner. 
// 3. Ignore all spaces in both strings. 
// 4. Consider only alphabetic characters (a-z). 
// 5. Determine if the two strings are anagrams. 
// 6. Print true if they are anagrams; otherwise, print false.

let str1 = "listen";
let str2 = "silent";

let str3 = "Listen";
let str4 = "Silent";

let str5 = "conversation";
let str6 = "voices rant on";

let str7 = "hello";
let str8 = "world";

function checkForAnagram(string1, string2)
{
    let isAnagram = false;
    // Making case insensitive and removing spaces
    string1 = string1.toLowerCase().replaceAll(" ", "");
    string2 = string2.toLowerCase().replaceAll(" ", "");

    // Filtering only alphabetic characters
    string1 = string1.split('').filter(char => char >= 'a' && char <= 'z').join('');
    string2 = string2.split('').filter(char => char >= 'a' && char <= 'z').join('');

    /// Determining if the two strings are anagrams
    // Phase 1: Check strings length:
    if(string1.length !== string2.length)
    {
        console.log(string1 + " ".repeat(3) + string2 + " = " + isAnagram);
        return;
    }

    //Phase 2: Check for letters frequency:
    let sortedString1 = string1.split("").sort().join('');
    let sortedString2 = string2.split("").sort().join('');

    if(sortedString1 === sortedString2)
    {
        isAnagram = true;
        console.log(string1 + " ".repeat(3) + string2 + " = " + isAnagram);
    }
    else
    {
        console.log(string1 + " ".repeat(3) + string2 + " = " + isAnagram);
    }
}

checkForAnagram(str1, str2);
checkForAnagram(str3, str4);
checkForAnagram(str5, str6);
checkForAnagram(str7, str8);