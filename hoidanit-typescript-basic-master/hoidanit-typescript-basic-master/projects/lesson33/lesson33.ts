class Person33{ 
    ssn: string; 
    firstName: string; 
    lastName: string; 
    constructor(ssn: string,firstName: string, lastName: string){ 
        this.ssn=ssn; 
        this.firstName=firstName; 
        this.lastName= lastName; 
    }
        getFullName(): string{ 
    return`${this.firstName}${this.lastName}`; 
    } 
}

let test = new Person33("123-45-6789","ly","Binh");

console.log(test.getFullName()); // lyBinh

    