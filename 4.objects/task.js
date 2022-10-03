function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}

    new Student("Tony", "male", 37);
    new Student("Buzz", "female", 35);

Student.prototype.setSubject = function (subjectName) {

  this.subject = subjectName;
}  
Student.prototype.addMark = function (mark) {
  
  if(this.marks === undefined) { 
    this.marks = [];
    this.marks.push(mark);
    } else {
     this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...mark) {
  this.marks = [];
  this.marks.push(...mark);
   
}
Student.prototype.getAverage = function () {


  if(this.marks.length === 0) {
    return 0;
  }
  let summ = 0
  for(let i=0; i < this.marks.length; i++) {
    summ +=this.marks[i];
  }
  return summ/this.marks.length;


  //this.average = this.marks.reduce(((acc,item) => acc + item)/this.marks.length, 0);
 
}
Student.prototype.exclude = function (reason) {

  this.excluded = reason;
}
