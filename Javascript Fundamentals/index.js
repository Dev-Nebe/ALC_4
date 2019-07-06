'use strict';

// // console.log('webpack starterkit');
// // //constant must be visualized.

// // // let cardi = 5;
// // //let is limited to it's local scope, while var has a more global scope
// // //let is preferred cos it helps you catch errors early with your code

// // if (true){
// //     var cardi = 100;
// // }
// // console.log(cardi);

// // //Rest parameter unpacks the remaining arguments into an array named the string after the three dots and array methods can be called on this array as expected
// // //the rest parameter must be used as the last argument

// // function sendCars(day, ...carIds){
// //     carIds.forEach(id => console.log(id));
// //     }

// // sendCars('Tuesday', 1, 2, 3, 4, 6);

// // //Destructuring Arrays: We can use this to unpack an array into another array. JS knows to destructure cos the items in the square brackets will be on the left hand side of the assignment operator.

// // let mainOne = [1, 2, 4, 5, 6, 7, 8];
// // let [, car2, ...car3] = mainOne; //Here I combined destructuring with the rest parameter. Also, using a given number of commas will skip the appropriate number of elements
// // console.log(car2, car3);

// // //Destructuring Objects: use curly braces for destructuring arrays, and surround them with parentheses if the variables are not declared on the same line

// // let car = {id: 5000, style: 'convertible'};
// // let id, style;
// // ({id, style} = car);
// // console.log(id, style);

// // //In Javascript both strings and arrays are iterables
// // function startCars(car1, car2, car3, ...rest){
// //     console.log(car1, car2, car3, rest);
// // }
// // let carS = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// // startCars(...carS);

// //typeof() is a built in function
// // console.log(typeof(1), typeof({}), typeof(null), typeof(undefined), typeof(NaN),typeof('Hello'));


// // console.log(Number.parseFloat('55.55ad56'));

// let year = '1967';
// console.log(+year);

// //A logical and has precedence over a logical or
// if (5 == 5 && 6 !== 7){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// //Conditional operator
// console.log((5 > 44) ? 'yes' : 'no');

// let newyear = 1967;
// newyear %= 10;

// console.log(newyear);

// //IIFE: Immediately invoked function expression
// let John = (function(){
//     let carId = 123;
//     let getId = (function(){
//         return carId;
//     })();
//     return {
//         getId: getId,
//         getIdAgain: getId + 2
//     };

// })();

// console.log(John.getId);
// console.log(John.getIdAgain);

// // call and apply can be used to call a function
// let o = {
//     carId: 123,
//     getId: function(){
//         return this.carId;
//     }
// };
// let newCAr = { carId: 456};

// console.log(o.getId.call(newCAr)); //.call method replaces the this for the object which it belongs to with the object which was passed to it as an argument

// // similarly, .apply does the same thing plus it accepts an array of arguments which will be passed as the required argument to the method being invoked 
// let ox = {
//     carIds: 123,
//     getIds: function(prefix){
//         return prefix + this.carIds;
//     }
// };
// let newCArr = { carIds: 456};

// console.log(ox.getIds.apply(newCArr, ['Here\'s the new car: ']));

// // Bind nakes a copy of the function then behaves like call.
// // Arrow functions do not have their own 'this' value.  

// // Protypes are used to extend objects and to add functionality to all instances of an object.


// var cat = {
//     name: {first: 'Fluffy', last: 'LaBeouf'},
//     color: 'White'
// };

// Object.defineProperty(cat, 'name', {writable: false}); //This makes the property of an object read only
// Object.freeze(cat.name); //If the property also contains an object then you can use this to freeze so it becomes immutable, or you can just also apply the technique in the previous line
// //cat.name = 'Bullet';
// //cat.name.first = 'Bullet';
// console.log(Object.getOwnPropertyDescriptor(cat, 'name'));
// console.log(cat.name);

// var cat = {
//     name: {first: 'Fluffy', last: 'LaBeouf'},
//     color: 'White'
// };

// //ENUMERATE determines whether the property can be iterated over or listed amongst the keys of the object.
// //CONFIGURABLE determines whether you can modify the description of property as well as delete it.
// Object.defineProperty(cat, 'name', {enumerable: true});

// for(var x in cat){
//     //console.log(x);//doing this iterates over the name of the property and prints it
//     console.log(`${x}: ${cat[x]}`); //this iterates over the properties and prints each with it's value in the console
// }

// console.log(Object.keys(cat));

// //GETTERS AND SETTERS
// Object.defineProperty(cat, 'fullName', {
//     get: function (){return `${this.name.first} ${this.name.last}`;},
//     set: function (value) {
//         let nameParts = value.split(' ');
//         this.name.first = nameParts[0];
//         this.name.last = nameParts[1];
//     }
// });

// cat.fullName = 'Okwudili Pat-Nebe';
// console.log(cat.name);
// console.log(`First Name: ${cat.name.first}`);
// console.log(`Last Name: ${cat.name.last}`);

// JavaScript Prototypes and Inheritance
/*
-A prototype is actually an object!!!
--Definition
    + A function's prototype is the object instance that will become the prototype for all objects created using this function as a constructor
    + An object's prototype is the object instance from which the object is inherited.
All instances of an Object inherit the properties and methods of that object's prototype
The instance property overrides the prototype property
__proto__ is the proto-property of the object instance which points to the prototype property of the object 
*/

// function Animal(voice){
//   this.voice = voice;
//   };

// Animal.prototype.speak = function(){
//   return this.voice;
// };

// function Cat(name, color){
// //   Animal.call(this, 'Meow');
//   this.name = name;
//   this.color = color;
// };
// // Cat.prototype = Object.create(Animal.prototype);
// // Cat.prototype.constructor = Cat;

// let fluffy = new Cat('Fluffy', 'White');
// // console.log(fluffy);
// // console.log(fluffy.speak());

// let jsonIn = `[
//     {"carId" : 123},
//     {"carId" : 456},
//     {"carId" : 789}]`
// ;

// let carIds = JSON.parse(jsonIn); //The JSON.parse method parses a JSON string into an regular javascript object

// console.log( carIds );

// console.log(JSON.stringify(carIds)); //The JSON.stringify method converts a regular JS object into a JSON string

// console.log(JSON.stringify(fluffy)); //This is another example where stingify is used.

// //Array methods: arr.every = tests array; arr.forEach = iterates over the array; arr.filter = filters the array and returns a new array; arr.find = locates the first match of a supplied parameter.

// let carIds = [
//     {carId: 123, style: 'sedan'},
//     {carId: 456, style: 'convertible'},
//     {carId: 789, style: 'sedan'}
// ];

// carIds.forEach(car => console.log(car));

// carIds.forEach((car, index)=> console.log(car, index));

// let convertibles = carIds.filter(car => car.style === 'convertible');
// console.log(convertibles);

// let result =  carIds.every(car => car.carId > 0);
// console.log(result);

// let car = carIds.find(car => car.carId > 500);
// console.log(car);

// //CLASSES AND MODULES
// class Car {
//     constructor(id){
//         this.id = id;
//     }
//     identify(suffix){
//         return `Car Id: ${this.id} ${suffix}`;
//     }
// };

// let car = new Car(123);
// console.log(car.id);
// console.log(car.identify('!!!'));

// //Inheritance helps prevent the duplication of code. This is done buy inheriting the property(s)/method(s) of another Super class or object. THis is done using the 'extends' keyword.

// class Vehicle {
//     constructor(){ //The constructor function is used for adding properties to objects
//         this.type = 'car';
//     }
//     start(){ //Methods can be added, here directly,outside the constructor function 
//         return `Starting: ${this.type}`;
//     }
// }

// class Car extends Vehicle{
//     constructor(){ //When trying to access objects inherited from a parent class you have to call super()
//         super();
//     }
//     started(){
//         return `In the past it was ${super.start()}, now it has started`; //Similarly, you use super to represent the parent object when you want to access its methods
//     }
// }

// let car = new Car();
// console.log(car.started());

//MODULES: This helps you organise your classes
 
// import{Car} from './models/car.js'; //This imports the car class from the specified location. The dot (.) represents the base directory.

// let car = new Car(123);
// console.log(car.id);

// //Programming the BOM and DOM. DOM is the Document Object Model, and BOM is the Browser Object Model


// let intervalId = setInterval( () => console.log('1 second passed'), 1000);

// let timeoutId = setTimeout(() => console.log(' 4 seconds passed'), 4000);

// // clearInterval(intervalId);

console.log(location.href);