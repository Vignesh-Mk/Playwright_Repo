// Create two functions : launchBrowser, runTests where,
// a) launchBrowser need to take input as browserName (string) and do not return any
// - use if-else (chrome or otherwise)
// - Print the value
// b) runTests need to take input as testType (string) and do not return any
// - use switch case (smoke, sanity, regression, default (smoke))
// - Print the values
// Call that function from the javascript

function launchBrowser(browserName)
{
    if(browserName == "chrome")
    {
        console.log("Launching: Chrome Browser");
    }

    else if(browserName == "firefox")
    {
        console.log("Launching: Firefox Browser");
    }

    else
    {
        console.log("Launching: Default Browser");
    }
}

function runTests(testType)
{
    switch(true)
    {
        case testType == "smoke":
            console.log("Running Smoke Tests");
            break;

        case testType == "sanity":
            console.log("Running Sanity Tests");
            break;

        case testType == "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Running Smoke Tests");
    }
}

launchBrowser("Chrome");
runTests("smoke");