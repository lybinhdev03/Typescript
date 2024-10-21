class Person35 { 
    readonly birthDate: Date; 
    constructor(birthDate: Date) { 
        this.birthDate = birthDate; 
    } 
}

let person = new Person35(new Date(1990, 12, 25)); 
person.birthDate = new Date(1991, 12, 25); // Compile error 
    