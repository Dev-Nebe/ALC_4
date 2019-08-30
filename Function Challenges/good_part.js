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
// console.log(inc(5), inc(inc(5)));

let inc2 = liftf(add)(1);
// console.log(inc2(5), inc2(inc2(5)));

let inc3 = curry(add, 1);
// console.log(inc3(5), inc3(inc3(5)));
//THE CODE ABOVE ILLUSTRATES THE FIRST RULE OF FUNCTIONAL PROGRAMMIG: LET THE FUNCTIONS DO THE WORK. NO NEED TO REWRITE CODE IF THERE'S ALREADY A FUNCTION THAT CAN DO THE WORK.


//Task 7: Write a function 'twice' that takes a binary function and returns a unary function that passes its argument to the binary function twice
const twice = (binFunc) => {
    return (x) => binFunc(x, x);
};

let double = twice(add);
let square = twice(mul);
// console.log(double(11), square(11));


//Task 8: Write reverse, a function that reverses the arguments of a binary function
const reverse = (funct) => {return (x,y) => funct(y,x);};
let bus = reverse(sub);
// console.log(bus(3, 2));


//Task 9: Write a function composeu that takes two unary functions and returns a unary function that calls them both
const composeu = (func1, func2) => {
    return (x) => {return func2(func1(x));};
};
// console.log(composeu(double, square)(5));


//Task 10: Write a function composeb that takes two binary functions and returns a function that calls them both
const composeb = (funct1, funct2) => {
    return (x, y, z) => {return funct2(funct1(x,y),z);};
};

// console.log(composeb(add, mul)(2, 3, 7));


//Task 11: Write a limit function that allows a binary function to be called a limited number of times
const limit = (func, nlimit) => {
    let counter = 0;
    return (...x) => {
        if (counter < nlimit){counter+=1; return func(...x);}
        else {console.log(`You've reached the call limit for this function: ${counter}`); return undefined;}
    }; 
};
let add_ltd = limit(add, 3);
// console.log(add_ltd(3, 4));


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
// console.log(index(), index(), index(), index());


//Task 14: Write a fromTo function that produces a generator that will produce values in a range.
const fromTo = (startVal, endVal) => {
        return () => {if (startVal < endVal){startVal++; return startVal-1;}
        else {return undefined;}};
    };

const indices = fromTo(1, 5);
console.log(indices(), indices(), indices());


//Task 15: Write an element function that takes an array and a generator and returns a generator that will produce elments from the array. Task 15b: then modify it to return all items in the array if gen isn't provided
const element = (array, gen) => {
    let x = 0;
    array.push(undefined);    
    return () => {
        if (gen === undefined) {x++; return array[x-1];} //Instead of manually returning each element of the array, you can simply provide a value for gen and the function will contine to work as expected i.e. if (gen === undefined) {gen = fromTo(0, array.length);}, then you proceed to return the portion below the else statement. Do this for all values gen that are not functions
        else {
            let index = gen();
            if (index !== undefined) {return array[index];} //Note 1
        } 
    };
};

//Note 1: The code will actually work most of the time even if the "if" statement is left out. However, things will break if there's actually a value called "undefined" within the array object which you pass to "element". When this happens, the value of undefined will be returned instead of "undefined" as expected.

let ele = element(['a', 'b', 'c', 'd']);
// console.log(ele(), ele(), ele(), ele(), ele());


//Task 16: Write a collect function that takes a generator and an array and produces a function that will collect the results in the array.
const collect = (gen, array) => {
    let result;
    return () => {
        result = gen();
        if (result !== undefined) {array.push(result);}
        return result;
    };
};
let array = [];
let col = collect(fromTo(0, 4), array);
// console.log(col(), col(), col(), col(), col(), col(), array);


// Task 17: Write a filter function that takes a generator and a predicate and produces a generator that produces only the  values approved by the predicate
const third = (value) => {return (value % 3) === 0;};

const filter = (gen, predicate) => {
    return () => {
        // collect(gens, array)(); console.log(array); console.log(counter);
        // if (array[counter] === undefined) {return undefined;}
        // for (counter; predicate(array[counter]) == true; counter++){}
        // counter++;
        // return array[counter-1];
        let value;
        do {value = gen();} while (value !== undefined && !predicate(value));
        return value;    
    };
};

let fil = filter(fromTo(0,5), third);
console.log(fil(), fil(), fil(), fil());

//Task 18: Write a concat function that takes two generators and produces a generator that combines the sequences
const concat = (gen1, gen2) => {
    let gen1Val;
    let gen2Val;
    return () => {
        gen1Val = gen1();
        if (gen1Val === undefined) {gen2Val = gen2(); return gen2Val;}
        return gen1Val;
    };
};

let con = concat(fromTo(0, 3), fromTo(0,2));
console.log(con(), con(), con(), con(), con(), con());