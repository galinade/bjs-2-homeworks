function parseCount(string) {
    const parsed = Number.parseInt(string);
    if(isNaN(parsed)) {  
     throw new Error ("Невалидное значение");
    }
    return parsed; 
}

function validateCount(string) { 
    try{
      return parseCount(string);
    } catch (error){
        //return console.error("Ошибка");
        console.log(error);
    
    }
} 

class Triangle {
    constructor (a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.P = 0;
        this.p = 0;
        this.S = 0;
        
    
    if (this.a + this.b < this.c || this.a + this.c < this.b || this.b +this.c <this.a) {
        throw new Error ("Треугольник с такими сторонами не существует");    
    }
    }  
    getPerimeter() {
        return this.P = this.a + this.b + this.c;
    
    }

    getArea() {
        this.p = (this.a + this.b + this.c)/2;
        this.S = Math.sqrt(this.p*(this.p - this.a)*(this.p - this.b)*(this.p - this.c));
        return +this.S.toFixed(3);
    }

    //function getTriangle(a,b,c) {
    //   return new Triangle;
}


