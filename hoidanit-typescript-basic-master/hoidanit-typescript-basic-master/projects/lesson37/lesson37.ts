class Person37{ 
    constructor(private firstName: string,private lastName: string){ 
        this.firstName=firstName; 
        this.lastName= lastName; 
    }
    getFullName(): string{ 
        return`${this.firstName}${this.lastName}`; 
    }
    describe(): string{ 
        return`This is${this.firstName}${this.lastName}.`; 
    } 
}
    
class Employee1 extends Person37{ 
    private jobTitle; 
    constructor( 
    firstName: string, 
    lastName: string, 
    jobTitle: string) { 
    // call the constructorofthePersonclass: 
    super(firstName, lastName); 
    this.jobTitle = jobTitle; 
    } 
    }
    // letemployee=newEmployee('John','Doe','Front-endDeveloper'); 

class Employee extends Person37{ 
    constructor( 
        firstName: string, 
        lastName: string, 
        private jobTitle: string
        ){ 
            super(firstName, lastName); 
            this.jobTitle = jobTitle;
        }
    describe(): string{ 
        return super.describe()+`I'ma${this.jobTitle}.`; 
    } 
}
    let employee=new Employee('John', 'Doe', 'WebDeveloper'); 
        console.log(employee.describe());
        
    