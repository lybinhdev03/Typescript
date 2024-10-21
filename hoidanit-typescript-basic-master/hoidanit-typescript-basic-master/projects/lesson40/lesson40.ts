
// dinh nghia cau truc du lieu cho doi tuong person
// huong doi tuong
interface IPerson40 {
    firstName: string;
    lastName: string;
}


function getFullName(person: IPerson40): string {
        return `${person.firstName} ${person.lastName}`; 
    }
    
let person40={ 
    firstName: 'Eric', 
    lastName: 'Hoi Dan IT' 
};
console.log(getFullName(person40));//EricHoi Dan IT 
    