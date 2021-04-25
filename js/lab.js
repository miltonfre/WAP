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