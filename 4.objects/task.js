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
Student.prototype.addMark = function (marks) {

  if(this.marks === undefined){ 
    this.mark = marks.push();
    } else {
     this.mark = marks.push();
    }
}

Student.prototype.addMarks = function (...marks) {

  this.marks = marks();
 
}
Student.prototype.getAverage = function () {

  this.average = this.marks.reduce(((acc,item) => acc + item)/this.marks.length, 0);  ;
 
}
Student.prototype.exclude = function (reason) {
  delete student.subject;
  delete student.marks;
  this.excluded = reason;
}
