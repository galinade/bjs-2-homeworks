function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}

 student1 = new Student();
 student2 = new Student();

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}
Student.prototype.addMark(mark) = function (marks) {

  if(this.marks === undefined){ 
    this.mark = marks.push(mark[0]);
    } else {
     this.mark =marks.push(... mark) 
    }
}

// ваш код для остальных методов