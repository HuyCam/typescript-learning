function greeter(person : User) : string
{
    return "Hello, " + person.name;
}

let user:User = {
    name: 'hi',
    id: 123
};

interface User {
    name: string;
    id: number;
}

document.body.textContent = greeter(user);