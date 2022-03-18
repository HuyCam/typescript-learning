function greeter(person) {
    return "Hello, " + person.name;
}
var user = {
    name: 'hi',
    id: 123
};
document.body.textContent = greeter(user);
