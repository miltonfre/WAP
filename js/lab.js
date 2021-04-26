const arr=[1,50,40,3,10]
const result=arr.filter(x=>x>20)
                .reduce((acc,current)=>{
                  acc+=current;
                  return acc;
                },0);
console.log(result);

const arrString=['Manuel','Felipe','andres','Juan','miguel','jhon'];

const resultString=arrString.filter(x=>x.length>5 && x.includes('a'));
console.log(resultString);

function employee(firstName, lastName, birthDate){
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthDate=birthDate;
    
    this.getFullName=function(){
        return  this.firstName+' ' +this.lastName;
    }
    this.getAge=function(){
        var ageDifMs = Date.now() - birthDate.getTime();
        var ageDate = new Date(ageDifMs); 
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const arrEmployees=    [new employee('John', 'Smith',new Date('25/03/1956')),
                        new employee('Juan', 'posada',new Date('09/04/2010')),
                        new employee('Jorge', 'Arias',new Date('10/02/2012')),
                        new employee('Manuel', 'Fonseca',new Date('16/05/1984')),
                        new employee('Julian', 'Moon',new Date('22/06/1994')),
                        new employee('Donald', 'Trump',new Date('15/10/1990')),
                        new employee('Michael', 'Jackon',new Date('03/11/2000')),
                        new employee('Tim', 'Duncan',new Date('05/01/2002'))];
const older20=arrEmployees.filter(e=>e.getAge()>20)
                          .map(e=>e.getFullName());
console.log("Employees older than 20");
console.log(older20);

const employeesAfter200=arrEmployees.filter(e=>e.birthDate.getFullYear()>2000).map(e=>e.getFullName());
console.log("Employees born after 2000");
console.log(employeesAfter200);