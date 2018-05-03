// Program 3

// https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z 

// 1. What is the difference between undefined and not defined in JavaScript? 

var x
document.writeln(x);

try {
    document.writeln(y);
} catch (ex) {
    document.writeln(ex);
}

var y = 1;

if (function f() { }) {
    y += typeof f;
}

document.writeln(y);  // 1undefined

var k = 1;
if (1) {
    eval(function foo() { });
    k += typeof foo;
}

document.writeln(k); // 1undefined

var k = 1;
if (1) {
    function foo() { };
    k += typeof foo;
}

document.writeln(k); //1function 

// What is a closure? 
// A function declared inside of another function. 

var globalVar = 'Jackie Chan';

(function outerFunction(outerArg) { // begin scope outerfunction
    // Variable declared in outerFunction function scope...
    var outerFuncVar = 'American Football';

    (function innerFunction(innerArg) {
        var innerFunVar = 'Mayor lee';
        console.log(
            "outerArg = " + outerArg + "\n" +
            "outerFuncVar: " + outerFuncVar + "\n" +
            "innerArg = " + innerArg + "\n" +
            "innerFuncVar = " + innerFunVar + "\n" +
            "globalVar = " + globalVar
        );
    })(5)
})(7)

function mul(x) {
    return function (y) {
        return function (z) {
            return x * y * z;
        }
    }
}

document.writeln(mul(2)(3)(3));
document.writeln(mul(3));

// How can we empty and array? 

var anArray = ['a', 'b', 'c', 12, 3];

var copy = anArray;
var anotherArray = copy;

document.writeln('copy: ', copy);
copy = [];
document.writeln('copy: ', copy);
document.writeln('anotherArray: ', anotherArray);

copy = anArray;
anotherArray = copy;
document.writeln('copy: ', copy);
copy.length = 0;
document.writeln('copy: ', copy);
document.writeln('anotherArray: ', anotherArray);

anArray = ['a', 'b', 'c', 12, 3];
copy = anArray;
anotherArray = copy;
document.writeln('copy: ', copy);
copy.splice(0, copy.length);
document.writeln('copy: ', copy);
document.writeln('anotherArray: ', anotherArray);

// jeez keeping track of which values are copied by reference and value is tough...

// Question 7 - How do you check if an object is an array or not?

var arrayList = [1, 2, 3];

function greet(param) {
    if (Object.prototype.toString.call(param) === '[object Array]') {
        // check if its an array
        document.writeln('its an awway');
    } else {
        document.writeln('it not an array');

    }
}

greet(arrayList);

// What will be the output of the following code: 

var output = (function (x) {
    delete x;
    return x;
})(0);

console.log(output);

// delete operators don't affect local variables. 

// 9. What will be the output of the following code? 

var x = 1;
var output = (function () {
    delete x;
    return x;
})();

console.log(output);

// delete operators don't affect things that aren't objects. 

// 10. What will be the output of the code: 

var x = { foo: 1 };

var output = (function () {
    delete x.foo;
    return x.foo;
})();

// undefined is my guess. 
// hey! I was right! 

var Employee = {
    company: "bobs burgers"
}

var emp1 = Object.create(Employee);
delete emp1.company;
document.writeln('emp1.company: ', emp1.company);

document.writeln(emp1.company);
document.writeln(emp1.hasOwnProperty('company'));

delete emp1.__proto__.company;
document.writeln(emp1.company);

// 12. What is undefined x 1 in JavaScript? 

var treses = ['redwood', 'bay', 'cedar', 'oak'];

delete treses[3];

// it means array's uninitialized index. 

document.writeln(treses);
document.writeln('treses[3]: ', treses[3] === undefined);

var trees = ['1', 1, '2', 'applebutter'];
delete trees[3];
document.writeln('trees.length: ', trees.length);

var bar = true;
document.writeln('bar + 0: ', bar + 0, " bar + 'xyz'", bar + 'xyz', " bar + true: ", bar + true, " bar + false: ", bar + false);

var z = 1, y = z = typeof y;
document.writeln('y: ', y); //undefined - right to left 

// 16. What will be the output of the code: 

var foo = function bar() { return 12; }
try {
    typeof bar();
} catch (ex) {
    document.writeln(ex);
}

var bar = function () { return 12; }
document.writeln(typeof bar());

// 17 What is the difference between these function declarations. 

var foo = function () {
    // some code..
}

function bar() {

}

// foo is defined at run-time 
// bar is defined at parse time. 
document.writeln('***************')

foo(); // Calling foo functiuon here will give an error. 
var foo = function () {
    console.log("Hi I'm inside foo");
}

bar()
function bar() {
    console.log("Hi I'm inside bar");
}

var testCondition = true;

if (testCondition) {
    var foo = function () {
        console.log('inside foo with testcondition true value');
    };
} else {
    var foo = function () {
        console.log("inside foo with testCondition false value");
    };
}


// 18. What is function hoisting in JavaScript? 

// var fooi = function fooi() {
//     return 123; 
// };

// document.writeln(fooz());

// var fooz = function fooz() {
//     return 432;
// }

var salary = '1000$'; 

(function () {
    console.log("Original salary was: ", salary);

    var salary = "5000$"; 

    console.log("my new salary: ", + salary); 
})(); 

// undefined
// 5000$

// This is really what's happneing...
// The declaration is hoisted: 

salary = '1000$'; 

(function () {
    var salary = undefined; 
    console.log("Original salary was: ", salary); 

    salary = "5000$";

    console.log("My new Salary: " + salary); 
})(); 


// 20. What is the instanceof operator in JavaScript? 

function foo() {
    return foo; 
}

new foo() instanceof foo; 

// in this case instanceof checks the current object and returns true if the object is the specified type. 

// var dog = new Animal(); 
// dog instanceof Animal // = true; 

// var name = new String("xyz"); 
// document.writeln(name instanceof String); // true;

// function foo(){
//     return foo; 
// }

// var bar = new foo(); 

var counterArray = {
    A: 3, 
    B: 4
};

counterArray["C"] = 1; 

// Object has keys to determine the lenght of our counterArray 

function getSize(object){
    var count = 0; 
    for (key in object) {
        // hasOwnProperty method check own property of object. 
        if(object.hasOwnProperty(key)) count ++; 
    }
    return count; 
}

// We can also add a length method directly on Object: 

Object.length = function() {
    var count = 0; 
    for (key in object) {
        if (object.hasOwnProperty(key)) count++; 
    }
    return count; 
}
// Get the size of any object using...

document.writeln(Object.length(counterArray)); 