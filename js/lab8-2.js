///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//---------------------------------------POINT 2-----------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
function Student(fName,lName) {
    this.firstName= fName;
    this.lastName=lName;
    this.grades=[];
    this.inputNewGrade= function (grade) {
      this.grades.push(grade);
    },
    this.computeAverangeGrades= function () {
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
    new Student('Milton','Gonzalez'),
     new Student('Jhon','Smith'),
      new Student('Ana','Zapata'),
       new Student('Carl','Hugh'),
        new Student('jhon','Laporta'),
         new Student('Tim','Duncan')
  ];
  
  //students[0].grades = [];
  students[0].inputNewGrade(98);
  students[0].inputNewGrade(97);
  students[0].inputNewGrade(96);
  
  //students[1].grades = [];
  students[1].inputNewGrade(43);
  students[1].inputNewGrade(44);
  students[1].inputNewGrade(54);
  
  //students[2].grades = [];
  students[2].inputNewGrade(39);
  students[2].inputNewGrade(49);
  students[2].inputNewGrade(59);
  
  //students[3].grades = [];
  students[3].inputNewGrade(37);
  students[3].inputNewGrade(47);
  students[3].inputNewGrade(57);
  
  //students[4].grades = [];
  students[4].inputNewGrade(33);
  students[4].inputNewGrade(44);
  students[4].inputNewGrade(55);
  
  
  //students[5].grades = [];
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