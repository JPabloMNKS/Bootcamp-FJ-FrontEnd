// EJERCICIO 1
console.log(null || 2 || undefined);
// alert(null || 2 || undefined);
// Respuesta 2

// EJERCICIO 2
console.log(console.log(1) || 2 || console.log(3));
// alert(alert(1) || 2 || alert(3));
// Respuesta 1 y 2

// EJERCICIO 3
console.log(console.log(1) && console.log(2));
// alert(alert(1) && alert(2));
// Respuesta 1 y undefined

// EJERCICIO 4
console.log(null || 2 && 3 || 4);
// alert(null || 2 && 3 || 4);
// Respuesta 3

//EJERCICIO 5
let age2 = prompt('age?', 18);

let message2 = (age2 >= 14 && age2 <= 90) ? `${age2} is between 14 and 90` : 
    `${age2} is not between 14 and 90`;

alert(message2);    

// EJERCICIO 6
console.log(console.log(null) ?? null ?? 2 ?? console.log(3));
// alert(alert(null) ?? null ?? 2 ?? alert(3));
// Respuesta null y 2

// EJERCICIO 7
if(-1 || 0)
    console.log('First');
if(-1 && 0)
    console.log('Second');
if(null || -1 && 1)
    console.log('Third');
/*
if(-1 || 0)
    alert('First');
if(-1 && 0)
    alert('Second');
if(null || -1 && 1)
    alert('Third');
*/
// Respuesta First y Third

// EJERCICIO 8
let user;
console.log(user ?? "Anonymous");
/*
let user;
alert(user ?? "Anonymous");
*/
// Respuesta Anonymous

// EJERCICIO 9
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous");
/*
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous");
*/
// Respuesta Supercoder

// EJERCICIO 10
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' : 
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    'What an unusual age!';

alert(message);
// Respuesta segun lo que pongas funciona

// EJERCICIO 11
/*
5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false
*/

console.log('5 > 4', 5 > 4); // true
console.log('"apple" > "pineapple"', "apple" > "pineapple"); // false
console.log('"2" > "12"', "2" > "12"); // true
console.log('undefined == null', undefined == null); // true
console.log('undefined === null', undefined === null); // false
console.log(`null == "\ n0\ n"`, null == "\n0\n"); // false
console.log(`null === +"\ n0\ n"`, null === +"\n0\n"); // false


//challenge
console.log([1,2,3,4,7,4,2,1].reduce((t,i)=> t^i)); // 4

//challenge
let promise = new Promise(function(resolve, reject){
    resolve(10);
    setTimeout(() => resolve(2),1000);
});

promise.then(alert);

function delay(ms){
    return new Promise((resolve, reject) =>
    setTimeout(resolve,ms)
    )
}
delay(3000).then(() => alert('runs after 3 seconds'));

console.log(1);
setTimeout(()=> console.log(2));

Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(()=> console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));

console.log(7);

