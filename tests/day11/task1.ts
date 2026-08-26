// - Create an interface DatabseConnection with the following abstract methods:
//         - connect()
//         - disconnect()
//         - executeUpdate()
// - Implement the interface in a Concrete class.
// - Provide concrete implementations for the abstract methods in the Concrete class.

interface DatabaseConnection
{
    connect(): void;
    disconnect(): void;
    executeUpdate(): void;
}

class Database implements DatabaseConnection
{
    public connect(): void
    {
        console.log('Database Connected.');
    }

    public disconnect(): void
    {
        console.log('Database Disconnected.');
    }

    public executeUpdate(): void
    {
        console.log('Database Update executed.');
    }
}

const database = new Database();
database.connect();
database.disconnect();
database.executeUpdate();
