interface Person1 {
    firstName:string,
    lastname:String,
    sayHi: () => string
}

var customer:Person1 = {
    firstName: "Abhijeet",
    lastName:"Singh",
    sayHi: (): string => { return "The details of a customer object ended!!!" }
 }

 console.log("Customer Object")
 console.log(customer.firstName)
 console.log(customer.lastname)
 console.log(customer.sayHi())

 var employee:Person1 = {
    firstName:"Ruhi",
    lastname:"ana"
}