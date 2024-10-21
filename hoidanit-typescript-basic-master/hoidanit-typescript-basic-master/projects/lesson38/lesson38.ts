// class Circle{ 
    
//     static pi: number=3.14; 
//     static calculateArea(radius:number){ 
//         return this.pi *radius*radius; 
//     } 
// }
//     Circle.pi;//returns3.14 
//     Circle.calculateArea(5);//returns78.5 
    //staticandnonstatic 
    
// class Circle{ 
//     staticpi =3.14; 
//     pi =3; 
// }
// Circle.pi;//returns3.14 
// let circleObj = new Circle(); 
// circleObj.pi;//returns3 

class Circle{ 
    static pi =3.14; 
    static calculateArea(radius:number){ 
        return this.pi *radius*radius; 
    }
    calculateCircumference(radius:number):number{ 
        return 2*Circle.pi *radius; 
    } 
}
    
Circle.calculateArea(5);//returns78.5 
let circleObj = new Circle(); 
circleObj.calculateCircumference(5) //returns31.4000000 
    