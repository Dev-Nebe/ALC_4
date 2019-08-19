/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-console */
//console.log('Hello World');
//console.log('show');

//Task 1: Write the following basic functions
let add = (a, b) => {
	return a + b;
};

let sub = (a, b) => {
	return a - b;
};

let mul = (a, b) => {
	return a*b;
};


//Task 2: Write a function identityf that takes an argument and returns a function that returns that argument
let identityf = (args) => {
    return () => args;
};


//Task 3: Write a function addf that adds from two invocations
let addf = (x) => {
    let a = x; //apparently the function will still work if I skip this step
    return (y) => a + y;//so I could just replace a with x here since this function will be able to access x
};


//Task 4: Write a binary function liftf that takes a binary function, and makes it callable with two invocations
let liftf = (binFunc) => {
    return (x) => {return (y) => binFunc(x,y);};
};


//Task 5: Write a function curry that takes a binary function and an argument, and returns a function that can take a second argument
let curry = (binFunc, arg) => {
    return (x) => binFunc(arg, x);
};


//Task 6: Show three ways to build a new functionality (which increments a number by 1) using the above functions without writing any new function
let inc = addf(1);
console.log(inc(5), inc(inc(5)));

let inc2 = liftf(add)(1);
console.log(inc2(5), inc2(inc2(5)));

let inc3 = curry(add, 1);
console.log(inc3(5), inc3(inc3(5)));
//THE CODE ABOVE ILLUSTRATES THE FIRST RULE OF FUNCTIONAL PROGRAMMIG: LET THE FUNCTIONS DO THE WORK. NO NEED TO REWRITE CODE IF THERE'S ALREADY A FUNCTION THAT CAN DO THE WORK.


//Task 7: Write a function 'twice' that takes a binary function and returns a unary function that passes its argument to the binary function twice
const twice = (binFunc) => {
    return (x) => binFunc(x, x);
};

let double = twice(add);
let square = twice(mul);
console.log(double(11), square(11));


//Task 8: Write reverse, a function that reverses the arguments of a binary function
