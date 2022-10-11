function parseCount(parseInt) {
   //if(typeof Number(parseInt) !== 'number' ) {
    if (Number(parseInt)== NaN) {
   
    throw new Error ("Невалидное значение");
   }
   return Number(parseInt); 
}

function validateCount(parseInt) {
   // this.parseInt = 

       function parseCount() 
       
}













class Triangle {
      constructor (a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    
    if (a + b < c || a + c < b || b +c < a) {
        throw new Error ("Треугольник с такими сторонами не существует");    
    }
      }
    getPerimeter(a,b,c) {
        this.P = a + b + c;
       return P;
    }

    getArea(a,b,c) {
        this.p = (a + b + c)/2;
        this.S = Math.sqrt(this.p*(this.p - this.a)*(this.p - this.b)*(this.p - this.c));
        return +S.toFixed(3);
    }
}
    function getTriangle(a,b,c) {
       return new Triangle;

    }
