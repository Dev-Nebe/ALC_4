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
const reverse = (funct) => {return (x,y) => funct(y,x);};
let bus = reverse(sub);
console.log(bus(3, 2));


//Task 9: Write a function composeu that takes two unary functions and returns a unary function that calls them both
const composeu = (func1, func2) => {
    return (x) => {return func2(func1(x));};
};
console.log(composeu(double, square)(5));


//Task 10: Write a function composeb that takes two binary functions and returns a function that calls them both
const composeb = (funct1, funct2) => {
    return (x, y, z) => {return funct2(funct1(x,y),z);};
};

console.log(composeb(add, mul)(2, 3, 7));


//Task 11: Write a limit function that allows a binary function to be called a limited number of times
const limit = (func, nlimit) => {
    let counter = 0;
    return (...x) => {
        if (counter < nlimit){counter+=1; return func(...x);}
        else {console.log(`You've reached the call limit for this function: ${counter}`); return undefined;}
    }; 
};
let add_ltd = limit(add, 3);
console.log(add_ltd(3, 4));


//Task 12: Write a from function that produces a generator that will produce a series of values
const from = (x) => {
    return () => x++;
};
//let index = from(8);
//console.log(index(), index(), index());


//Task 13: Write a to function that takes a generator and an end value and returns a generator that produce numbers up that limit
const to = (gen, endVal) => {
    return () => {
        if (endVal > 1) {--endVal; return gen();}
        else {return undefined;}
    };
};
let index = to(from(1), 3);
console.log(index(), index(), index(), index());


//Task 14: Write a fromTo function that produces a generator that will produce valies in a range.
const fromTo = () => {
    return () => {};
}