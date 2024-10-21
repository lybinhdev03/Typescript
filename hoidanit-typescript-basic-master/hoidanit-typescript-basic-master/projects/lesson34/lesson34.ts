//public
//private
//protected


class Person34{ 
    private ssn: string; 
    private firstName: string; 
    private lastName: string; 
    constructor(ssn: string,firstName: string, lastName: string){ 
        this.ssn=ssn; 
        this.firstName=firstName; 
        this.lastName= lastName; 
    }
    getFullName(): string{ 
        return`${this.firstName}${this.lastName}`; 
    } 
}

let person34 = new Person34('153-07-3130', 'John', 'Doe'); 
console.log(person34.ssn);//compileerror 



class Employee34{ 
    public empName: string; 
    protected empCode: number; 
    constructor(name: string,code: number){ 
        this.empName=name; 
        this.empCode=code; 
    } 
}
    
class SalesEmployee extends Employee34{ 
    private department: string; 
    constructor(name: string,code: number,department: string){ 
        super(name,code); 
        this.department=department; 
    }
    getTest(): string{
        return `${this.empCode}`;
    }
}
let emp=new SalesEmployee("JohnSmith",123,"Sales"); 
emp.empCode;//CompilerError
    
    