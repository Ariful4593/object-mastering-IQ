const normalPerson = {
    firstName: "Ariful",
    lastName: "Islam",
    salary: 20000,
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: "Jahed",
    lastName: "Kamal",
    salary: 10000,
}
normalPerson.chargeBill.call(heroPerson, 1000);
console.log(heroPerson.salary);