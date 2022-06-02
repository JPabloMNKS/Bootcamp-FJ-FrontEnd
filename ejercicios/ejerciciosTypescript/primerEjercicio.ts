const PI: number = Math.PI;
let age: number;
const PersonName: string = 'Alexander';
let maybe: string | number;
type rol = 'User' | 'Admin';


maybe = 25; 
age = 24
maybe = 'something else';


interface IPerson {
    name: string,
    age: number,
    rol: rol
}

const person : IPerson = {
    name: PersonName,
    age: age,
    rol: 'Admin' // can be Admin or User
}

console.log(person);