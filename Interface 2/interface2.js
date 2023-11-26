var sayStuff = {
    sayHi: function (name) {
        return "Hi ".concat(name);
    },
    sayBye: function (name) { return "Bye ".concat(name); },
};
console.log(sayStuff.sayHi('Abhijeet Singh'));
console.log(sayStuff.sayBye('Abhijeet Singh'));
