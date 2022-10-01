function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}

 student1 = new Student();
 student2 = new Student();

Student.prototype.setSubject = function (subjectName) {

  this.subject = subjectName;
}  
Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) { 
    this.marks = [];
    } else {
     this.marks = mark;
    }
}

Student.prototype.addMarks = function (...marks) {

  this.marks =[...marks];
 
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
  delete Student.subject;
  delete Student.marks;
  this.excluded = reason;
}
