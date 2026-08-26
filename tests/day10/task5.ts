// - Create a class named BasePage.
// - Create methods like findElement(), clickElement(), enterText() and performCommonTasks().
// - Create a subclass named LoginPage.  - Override the performCommonTasks() method in the LoginPage class.
// - Demonstrate the concept by creating objects for both classes and calling their methods.

class BasePage
{
    public findElement(): void
    {
        console.log('findElement function called.');
    }

    public clickElement(): void
    {
        console.log('clickElement function called');
    }

    public enterText(): void
    {
        console.log('enterText function called');
    }

    public performCommonTasks(): void
    {
        console.log('performCommonTasks function called');
    }
}

class LoginPage extends BasePage
{
    public override performCommonTasks(): void 
    {
        console.log('performCommonTasks function overrided');
    }
}

const basePage = new BasePage();
const loginPage = new LoginPage();

basePage.findElement();
basePage.clickElement();
basePage.enterText();
basePage.performCommonTasks();

loginPage.findElement();
loginPage.clickElement();
loginPage.enterText();
loginPage.performCommonTasks();
