// - Create a superclass Browser.
// - Add at least two variables to the Broswer class: browserName and browserVersion
// - Implement 3 methods openURL(), closeBrowser(), navigateBack() in the Browser class.
// - Create subclasses such as Chrome, Edge and Safari
// - Define openIncognito() and clearCache() methods in Chrome class
// - Define takeSnap() and clearCookies() methods in Edge class
// - Define readerMode() and fullScreenMode() methods in Safari class
// - Demonstrate the concept by creating objects for both classes and calling their methods.

class Browser
{
    public browserName: string;
    public browserVersion: string;

    constructor(browserName: string, browserVersion: string)
    {
        this.browserName = browserName;
        this.browserVersion = browserVersion;
    }

    public openURL(url: string): void
    {
        console.log(`URL Opened: ${this.browserName}-${this.browserVersion}-> ${url}`);
    }

    public closeBrowser(): void
    {
        console.log(`Browser Closed: ${this.browserName}-${this.browserVersion}`);
    }

    public navigateBack(): void
    {
        console.log(`Navigated Back: ${this.browserName}-${this.browserVersion}`);
    }
}

class Chrome extends Browser
{
    constructor(version: string)
    {
        super('Google Chrome', version);
    }

    public openIncognito(): void
    {
        console.log(`${this.browserName}-${this.browserVersion}: Opened Incognito`);
    }

    public clearCache(): void
    {
        console.log(`${this.browserName}-${this.browserVersion}: Cleared Cache`);
    }
}

class Edge extends Browser
{
    constructor(version: string)
    {
        super('Microsoft Edge', version);
    }

    public takeSnap(): void
    {
        console.log(`${this.browserName}-${this.browserVersion}: Taken a snap`);
    }

    public clearCookies(): void
    {
        console.log(`${this.browserName}-${this.browserVersion}: Cookies Cleared`);
    }
}

class Safari extends Browser
{
    constructor(version: string)
    {
        super('Apple Safari', version);
    }

    public readerMode(): void
    {
        console.log(`${this.browserName}-${this.browserVersion}: Reader Mode Toggled`);
    }

    public fullScreenMode(): void
    {
        console.log(`${this.browserName}-${this.browserVersion}: Full Screen Mode enabled`);
    }
}

// Creating class instances:
const chromeDriver = new Chrome('123.45');
const edgeDriver = new Edge('12.34');
const safariDriver = new Safari('1.234');

// Calling Superclass methods for child classes:
chromeDriver.openURL('https://www.google.com/');
chromeDriver.navigateBack();
chromeDriver.closeBrowser();

edgeDriver.openURL('https://www.microsoft.com/en-in');
edgeDriver.navigateBack();
edgeDriver.closeBrowser();

safariDriver.openURL('https://www.apple.com/');
safariDriver.navigateBack();
safariDriver.closeBrowser();

// Calling child class methods:
chromeDriver.openIncognito();
chromeDriver.clearCache();

edgeDriver.takeSnap();
edgeDriver.clearCookies();

safariDriver.readerMode();
safariDriver.fullScreenMode();
