import {logger, test} from './logger.js';
/*
Using interface and class to define types
primitive types: boolean, bigint, null, number, string, symbol, undefined
TypeScript extended types: 
*/

function definingType() {
    interface User {
        name: string;
        id: number;
    }
    
    class UserAccount {
        name: string;
        id: number
        
        constructor(name: string, id: number) {
            this.name = name;
            this.id = id;
        }
    
    
    }
    
    const user: User = new UserAccount("Huy", 123);
    
    const customer1: UserAccount = new UserAccount("David", 1234);

    logger(user);
    // logger(customer1);
}

definingType();
