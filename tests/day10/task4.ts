// - Create a class named APIClient and create two methods with the same name passing different input arguments.
// - Inside the APIClient class, define the sendRequest method with multiple overloaded versions.
// - One version should accept one input argument: a string for the endpoint.
// - Another version of the sendRequest method should accept three input arguments: a string for the endpoint, a string for the requestBody, and a boolean parameter requestStatus to verify 
// whether the request is successful.
// - Create a method to demonstrate the usage of the overloaded sendRequest method.
// - Create an object of the APIClient class.
// - Call both versions of the sendRequest method on the APIClient object with different sets of input arguments to showcase method overloading.

import { request } from "node:http";

class APIClient
{
    public sendRequest(endpoint: string): void;
    public sendRequest(endpoint: string, requestBody: string, requestStatus: boolean): void;

    public sendRequest(endpoint: string, requestBody?: string, requestStatus?: boolean): void
    {
        let output: string = `Endpoint: ${endpoint}, `;

        if(requestBody !== undefined)
        {
            output += `requestBody: ${requestBody}, `;
        }

        if(requestStatus !== undefined)
        {
            output += `requestStatus: ${requestStatus}`;
        }

        console.log(output);
    }
}

const apiClient = new APIClient();
const endpoint = '/api/v1/end-user';
const requestBody = '{part ID = 123}';
const requestStatus = true;

apiClient.sendRequest(endpoint);
apiClient.sendRequest(endpoint, requestBody, requestStatus);
