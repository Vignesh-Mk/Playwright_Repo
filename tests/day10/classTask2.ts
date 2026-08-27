// Create an Interface Payments with the following abstract methods:  
//     - cashOnDelivery()
//     - upiPayments()
//     - cardPayments()
//     - internetBanking()
// Create an Abstract Class CanaraBank that implements Payments interface and adds `recordPaymentDetails()` for payment specifics.  
// Create a Concrete Class Amazon that inherits CanaraBank, implementing methods.

interface Payments
{
    cashOnDelivery(): void;
    upiPayments(): void;
    cardPayments(): void;
    internetBanking(): void;
}

abstract class CanaraBank implements Payments
{
    public recordPaymentDetails(): void
    {
        console.log('CNB: Payment Details recorded');
    }

    abstract cashOnDelivery(): void;
    abstract upiPayments(): void;
    abstract cardPayments(): void;
    abstract internetBanking(): void;
}

class Amazon extends CanaraBank
{
    cashOnDelivery(): void 
    {
        console.log('Amazon: Cash on Delivery Initiated');
    }

    upiPayments(): void 
    {
        console.log('UPI Payments initiated');
        this.recordPaymentDetails();
    }

    cardPayments(): void 
    {
        console.log('Card Payments initiated');
        this.recordPaymentDetails();
    }

    internetBanking(): void 
    {
        console.log('Internet banking initiated');
        this.recordPaymentDetails();
    }
}

const store = new Amazon();
store.cashOnDelivery();
store.upiPayments();
store.cardPayments();
store.internetBanking();
