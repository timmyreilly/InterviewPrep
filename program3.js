// Program 3

// https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z 

// 1. What is the difference between undefined and not defined in JavaScript? 

var x 
document.writeln(x); 

try {
    document.writeln(y); 
} catch(ex) {
    document.writeln(ex); 
}

var y = 1; 

if (function f() {}) {
    y += typeof f; 
}

document.writeln(y);  // 1undefined

var k = 1; 
if(1) {
    eval(function foo() {});
    k += typeof foo; 
}

document.writeln(k); // 1undefined

var k = 1; 
if(1) {
    function foo() {}; 
    k += typeof foo; 
}

document.writeln(k); //1function 

// What is a closure? 
// A function declared inside of another function. 

var globalVar = 'Jackie Chan'; 

(function outerFunction (outerArg) { // begin scope outerfunction
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

function mul(x){
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
    if(Object.prototype.toString.call( param ) === '[object Array]') {
        // check if its an array
        document.writeln('its an awway'); 
    } else {
        document.writeln('it not an array'); 

    }
}

greet(arrayList); 

// What will be the output of the following code: 

var output = (function(x) {
    delete x; 
    return x; 
})(0); 

console.log(output); 

// delete operators don't affect local variables. 

// 9. What will be the output of the following code? 

var x = 1; 
var output = (function() {
    delete x;
    return x; 
})(); 

console.log(output); 

// delete operators don't affect things that aren't objects. 

// 10. What will be the output of the code: 

var x = { foo: 1}; 

var output = (function() {
    delete x.foo; 
    return x.foo; 
})(); 

// undefined is my guess. 
// hey! I was right! 