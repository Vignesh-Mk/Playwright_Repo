// - Create a class.  
// - Inside this class, define the reportStep method with multiple overloaded versions:  
// - One version should accept two input arguments: a string for the message (msg) and another string for the status (status).  
// - Another version of the reportStep method should accept three input arguments: a string for the message (msg), a string for the status (status), and a boolean parameter (snap) to indicate 
// whether to take a snapshot.  
// - Create a method to demonstrate the usage of the overloaded reportStep method.  - Call both versions of the reportStep method with different sets of input arguments to 
// showcase method overloading.

class DemoClass
{
    public reportStep(msg: string, status: string): void;

    public reportStep(msg: string, status: string, snap: boolean): void;

    public reportStep(msg: string, status: string, snap?: boolean): void
    {
        if(snap !== undefined)
        {
            console.log(`Message: ${msg}\nStatus: ${status}\nSnap: ${snap}`);
        }
        else
        {
            console.log(`Message: ${msg}\nStatus: ${status}\n`);
        }
    }
}

const newInstance = new DemoClass();
newInstance.reportStep('This has only msg and status', 'active');
newInstance.reportStep('This has all three: msg, status and snap', 'inactive', true);
