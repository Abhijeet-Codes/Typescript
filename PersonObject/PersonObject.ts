type StringOrNumber = string | number;

type PersonObject = {
    name: string;
    id: StringOrNumber;
};

const Person_1: PersonObject = {
    name: 'Abhijeet Singh',
    id: 1206,
};

console.log(Person_1);

const Person_2: PersonObject = {
    name: 'rahul ',
    id: 1202,
};

console.log(Person_2);

const sayHello = (person: PersonObject) => {
    return 'HI' + person.name;
};

const sayGoodbye = (person: PersonObject) => {
    return 'Bye' + person.name;
};

console.log();
console.log(sayHello(Person_1));
console.log(sayGoodbye(Person_1));

console.log();
console.log(sayHello(Person_2));
console.log(sayGoodbye(Person_2));