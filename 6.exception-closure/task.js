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
    } catch (error) {
        return error ;
    }
} 

class Triangle {
    constructor (a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || b + c < a) {
        throw new Error ("Треугольник с такими сторонами не существует");    
        }
    }  
    getPerimeter() {
    
        const P = this.a + this.b + this.c;
        return  P;
    
    }

    getArea() {
       const p = this.getPerimeter()/2;
       const S = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
        return +S.toFixed(3);
    }
}

   function getTriangle(a,b,c) {
    
     try{
        return  new Triangle(a,b,c);
      } catch (error){
    return //getTriangle(a, b, c), getArea("Ошибка! Треугольник не существует"),
    //getPerimeter("Ошибка! Треугольник не существует");
    }
}