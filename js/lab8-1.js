///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------POINT 1-----------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
let student = {
    firstName: '',
    lastName: '',
    inputNewGrade: function (grade) {
      this.grades.push(grade);
    },
    computeAverangeGrades: function () {
      if (this.grades.length === 0) {
        return 0;
      }
      let sum = 0;
      for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
      }
      return sum / this.grades.length;
    }
  }
  
  let students = [
    Object.create(student),
    Object.create(student),
    Object.create(student),
    Object.create(student),
    Object.create(student),
    Object.create(student),
  ];
  students[0].firstName = 'Milton';
  students[0].lastName = 'Gonzalez';
  students[0].grades = [];
  students[0].inputNewGrade(98);
  students[0].inputNewGrade(97);
  students[0].inputNewGrade(96);
  
  students[1].firstName = 'Jhon';
  students[1].lastName = 'Smith';
  students[1].grades = [];
  students[1].inputNewGrade(43);
  students[1].inputNewGrade(44);
  students[1].inputNewGrade(54);
  
  students[2].firstName = 'Ana';
  students[2].lastName = 'Zapata';
  students[2].grades = [];
  students[2].inputNewGrade(39);
  students[2].inputNewGrade(49);
  students[2].inputNewGrade(59);
  
  students[3].firstName = 'Carl';
  students[3].lastName = 'Hugh';
  students[3].grades = [];
  students[3].inputNewGrade(37);
  students[3].inputNewGrade(47);
  students[3].inputNewGrade(57);
  
  students[4].firstName = 'jhon';
  students[4].lastName = 'Laporta';
  students[4].grades = [];
  students[4].inputNewGrade(33);
  students[4].inputNewGrade(44);
  students[4].inputNewGrade(55);
  
  students[5].firstName = 'Tim';
  students[5].lastName = 'Duncan';
  students[5].grades = [];
  students[5].inputNewGrade(30);
  students[5].inputNewGrade(40);
  students[5].inputNewGrade(50);
  console.log('Average each student');
  students.forEach((student) => {
    console.log(student.firstName+' ' +student.lastName+':'+student.computeAverangeGrades())
  });
  
  let promTotal=students.map(x=>x.computeAverangeGrades())
  .reduce((acum,curren,ind,arr)=>{
    acum+=curren/arr.length;
    return acum;
  },0);
  console.log('Average total:');
  console.log(promTotal);
  