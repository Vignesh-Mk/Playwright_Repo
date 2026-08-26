// - Create a superclass as TestData.
// - Implement 2 methods: enterCredentials(), navigateToHomePage() in the TestData class.
// - Create subclasses and create 2 methods in each LoginTestData
//         - enterUsername()
//         - enterPassword()
// - Demonstrate the concept by creating objects for both classes and calling their methods.

class TestData
{
    public enterCredentials(): void
    {
        console.log(`Credentials Entered`);
    }

    public navigateToHomePage(): void
    {
        console.log(`Navigating to Home Page`);
    }
}

class LoginTestData extends TestData
{
    public enterUsername(): void
    {
        console.log('Username Entered');
    }

    public enterPassword(): void
    {
        console.log('Password Entered');
    }
}

// Creating class instances:
const defaultData = new TestData();
const loginTestData = new LoginTestData();

// Calling Superclass and child class methods:
defaultData.enterCredentials();
defaultData.navigateToHomePage();

loginTestData.enterCredentials();
loginTestData.navigateToHomePage();
loginTestData.enterUsername();
loginTestData.enterPassword();
