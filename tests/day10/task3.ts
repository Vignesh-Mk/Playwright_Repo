// Step 1: Implement the `WebComponent` Base Class 
// Define a class `WebComponent` with: 
//    - A constructor that initializes a `selector` property. 
//    - A `click()` method that prints a console message simulating a click. 
//    - A `focus()` method that prints a console message simulating focusing on the component. 
 
// Step 2: Implement the `Button` Derived Class 
// Define a class `Button` that extends `WebComponent`. - Override the `click()` method to include an additional message specific to buttons. 
 
// Step 3: Implement the `TextInput` Derived Class 
// Define a class `TextInput` that extends `WebComponent` with: 
//    - A property `value` initialized to an empty string. 
//    - An `enterText(text: string)` method that sets `value` and prints a message simulating text entry. 
 
// Step 4: Testing the Components 
// Define a function testComponents to demonstrate the usage of the classes -  Instantiate the `Button` and `TextInput` classes with example selectors. 
//   - Use the instances to simulate clicking the button and entering text into the text input.

class WebComponent
{
    public selector: string;

    constructor(selector: string)
    {
        this.selector = selector;
    }

    public click(): void
    {
        console.log(`WebComponent with selector ${this.selector}: is clicked`);
    }

    public focus(): void
    {
        console.log(`WebComponent with selector ${this.selector}: is focussed`);
    }
}

class Button extends WebComponent
{
    public override click(): void 
    {
        super.click();

        console.log('Button is clicked');
    }
}

class TextInput extends WebComponent
{
    public value: string = "";

    public enterText(text: string): void
    {
        this.value = text;

        console.log(`TextInput entered the text: ${this.value}`);
    }
}

function testComponents(): void
{
    const buttonSelector = new Button('#btn-slctr');
    const textBoxSelector = new TextInput('#txtb-slctr');

    buttonSelector.focus();
    buttonSelector.click();

    textBoxSelector.focus();
    textBoxSelector.enterText('Sample Text');
}

testComponents();
