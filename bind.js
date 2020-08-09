const normalPerson = {
    firstName: "Ariful",
    lastName: "Islam",
    salary: 15000,
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// console.log(normalPerson.salary)
// const test = normalPerson.chargeBill(5000);
// console.log(test)

const personTwo = {
    firstName: "Selim",
    lastName: "khan",
    salary: 25000
}

const personChargeBill = normalPerson.chargeBill.bind(personTwo);
// console.log(personChargeBill(1000));

console.log(normalPerson.chargeBill(10000))

// console.log(normalPerson.salary)