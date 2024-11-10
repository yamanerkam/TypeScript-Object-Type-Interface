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