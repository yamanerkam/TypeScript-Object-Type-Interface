// object
let person : {name:string, age:number ,isProgrammer?:boolean} = {
  name : 'Kam',
  age : 25
}

person.isProgrammer = true;
console.log(person) 

// type

type PersonType = {
  name:string, 
  age:number ,
  isProgrammer?:boolean
} 

let personType : PersonType = {
  name : 'erkam',
  age : 25,
  isProgrammer: true
}

console.log(personType)

// interface
// interfaces should be used with an object

interface PersonInterface {
  name:string, 
  age:number ,
  isProgrammer?:boolean
}

let personInterface : PersonInterface = {
  name : 'yaman',
  age : 25,
  isProgrammer: true
}

console.log(personInterface)