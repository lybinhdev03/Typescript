
abstract class Employee39{ 
    constructor(private firstName: string,private lastName: string){ 
}
    abstract getSalary(): number;//abstractmethod 
    //normal method 
    get fullName(): string{ 
        return`${this.firstName}${this.lastName}`; 
    }
    compensationStatement(): string{ 
        return`${this.fullName}makes${this.getSalary()}amonth.`; 
    } 
}

class FullTimeEmployee extends Employee39{ 
    constructor(firstName: string, lastName: string,private salary: number){ 
        super(firstName, lastName);
    }

    getSalary(): number{ 
        return this.salary; 
    } 
}
class Contractor extends Employee39{ 
    constructor(firstName: string, lastName: string,private rate: number,private hours: number) { 
        super(firstName, lastName); 
    }
    getSalary(): number { 
        return this.rate * this.hours; 
    } 
}
let e1 = new FullTimeEmployee("Eric", "Hoi Dan IT", 12000); 
let e2 = new Contractor("Eric", "Hoi Dan IT", 100, 160); 
//console.log(john.compensationStatement()); 
//console.log(jane.compensationStatement());
