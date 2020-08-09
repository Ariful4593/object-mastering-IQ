// const fullName = {
//     firstName: "Ariful",
//     lastName: "Islam",
//     getFullName: function(){
//         return(
//             this.firstName,this.lastName
//         )
//     }
// }

// console.log(fullName.firstName)

// const fullName = {
//     firstName: "Ariful",
//     lastName: "Islam",
//     getFullName: hello => this.firstName
// }

// console.log(fullName.getFullName)

const fullName = {
    firstName: "Ariful",
    lastName: "Islam",
    salary: 15000,
    getFullName: function(){
        return(
            this.firstName,this.lastName
        )
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const test = fullName.chargeBill(5000)
console.log(test)