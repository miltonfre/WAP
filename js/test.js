const student = {
    firsName: '',
    lastName: '',
    inputNewGrade: function (newGrade) {
      this.grades.push(newGrade);
    },
  
    computeAverageGrade: function () {
      
     let result= this.grades.reduce((acum, curr, index, array) => {
       console.log( curr);
        acum += curr / array.length;
      }, 0);
      
      return result;
    }
  }
  
  const stu1 = Object.create(student);
  stu1.firstName = 'John';
  stu1.lastName = 'Smith';
  stu1.grades=[];
  stu1.inputNewGrade(88);
  stu1.inputNewGrade(98);
  stu1.inputNewGrade(86);
  stu1.inputNewGrade(80);
  const stu2 = Object.create(student);
  stu2.firstName = 'John2';
  stu2.lastName = 'Smith2';
  stu2.grades=[];
  stu2.inputNewGrade(85);
  stu2.inputNewGrade(95);
  stu2.inputNewGrade(85);
  stu2.inputNewGrade(70);
  const students = [stu1, stu2];
  const studentsAv = stu2.computeAverageGrade();
  
  const result = students.reduce((average, stu, index, array) => average + stu.computeAverageGrade() / array.length, 0);
  console.log(result);
  