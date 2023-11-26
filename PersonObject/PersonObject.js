var Person_1 = {
    name: 'Abhijeet Singh',
    id: 1206,
};
console.log(Person_1);
var Person_2 = {
    name: 'rahul ',
    id: 1202,
};
console.log(Person_2);
var sayHello = function (person) {
    return 'HI' + person.name;
};
var sayGoodbye = function (person) {
    return 'Bye' + person.name;
};
console.log();
console.log(sayHello(Person_1));
console.log(sayGoodbye(Person_1));
console.log();
console.log(sayHello(Person_2));
console.log(sayGoodbye(Person_2));
