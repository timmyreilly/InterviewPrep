// Looking at some other interview questions for JavaScript: 
// https://www.sitepoint.com/5-typical-javascript-interview-exercises/ 

// Scope: 

(function () {
    var a = b = 5;
})();

document.writeln(b);

// Essential JavaScript Questions: 
// https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z

// Intermediate Questions: http://www.thatjsdude.com/interview/js2.html 

/*
1. Differences between null and undefined...

typeof(undefined) == undefined
there is a global variable undefined. 
its a type with one value... undefined. 

null is a value. not a type. and but you can't assign to it. 

2. == vs ===
== is tolerant of different types
=== will check for the same type as well as value. 

undefined == null

3. Object Equality: 

primitives like strings and numbers are compared by value. 
objects arrays, dates, and user defined are compared by reference.
Are they referencing the same object? 
To check if objects are equal you need to compare every item in the object. 

*/

function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

/* Mighty. 

4. True Lies...

11+ true false related questions that will trick you...

*/

document.writeln('false' == false);
document.writeln(' ' == false);
document.writeln('' == false);
document.writeln({} == false);
document.writeln([] == false); // this does implicit conversion...

/* 6. Extend Core Object

*/

Date.prototype.nextDay = function () {
    var currentDate = this.getDate();

    return new Date(this.setDate(currentDate + 1));
}

var date = new Date();
document.writeln('Date: ', date, ' Next day: ', date.nextDay());

/* Bind
If you want to use an arbitrary object as value of this, how will you do that? 
*/

var monica = {
    name: 'monica',
    total: 500,
    deductMonthlyFee: function (fee) {
        this.total = this.total - fee;
        return this.name + ' remaining balance is: ' + this.total;
    }
}

var rachel = { name: "Rachel", total: 1500 };
var rachelFeeDeductor = monica.deductMonthlyFee.bind(rachel, 200);

document.writeln(rachelFeeDeductor());
document.writeln(rachelFeeDeductor());

/*
Cool, so you can bind a method to another object. 
*/

var rachFeeDeductor = monica.deductMonthlyFee.bind(rachel);

document.writeln(rachFeeDeductor(211));

// That's neat too ^ 

/*
8 Arguments and call: 

*/

function isTwoPassed() {
    var args = Array.prototype.slice.call(arguments);
    return args.indexOf(2) != -1;
}

document.writeln(isTwoPassed(1, 5))
document.writeln(isTwoPassed(4, 3, 2));

// convert arguments to an array by calling slice method on an array and pass arguments. 

// What the heck is this apply thing...

function getMax(arr) {
    return Math.max.apply(null, arr);
}

document.writeln(getMax([1, 2, 3, 4]));

/* 10. this
What the heck is this in JavaScript? 

this always refers to an object. 
this refers to the current execution context. 

while executing a function in the context of an object, the object becomes the value of this. 
dom event handler, value of this would be the element that fired the event. 
*/

document.write('typeof: ', typeof []); // object 

document.write(' 2+true: ', 2 + true); // 3 
document.write(" '6' + 9: ", '6' + 9); 
document.write(" 4+3+2+'1': ", 4+3+2+'1' ) // '91' 

document.write(" -'34'+10: ", -'34'+10); // -24 for crying out loud...

document.write(" -'dude': ", -'dude'); 

document.writeln(Math.max([2, 3, 4, 5])); 

var arrNums = [2, 3, 4, 5]; 
document.writeln(Math.max(arrNums)); 

document.writeln('null == undefined: ', null == undefined); 

/* How could you set a prefix before everything you log? 
Just get the arguments, convert it to an array and unshift whatever prefix you want to set. Finally, use apply to pass all the arguments to console. 
*/ 

function log() {
    var args = Array.prototype.slice.call(arguments); 
    args.unshift('(app)'); 
    console.log.apply(console, args); 
}

log('my message'); 
log('my message', 'your message'); 

/* 
Scope and Hoisting: What will you see in the console for the following example: 
*/

var a = 1; 
function boring() {
    a = 10; 
    console.log(a); 
    return; 
    function a() {}
}
boring(); 

console.log(a); 

function foo() {
    var b; 
    b =7; 
    bar(); 
    var baz; 
    // baz(); function expression doesn't get hoisted.  
    return b; 
    function bar() {
        console.log(b); 
    }
    baz = function() {
        console.log(b); 
    }
}

foo(); 

// Bar is hoisted to the front of the local scope. 

// Closures Inside Loops...

for (var i = 0; i < 10; i++){
    setTimeout(function() {
        console.log(i); 
    }, 10); 
}

// IIFE - Immediately invoked function expression...

for (var i = 0; i < 3; i++){
    setTimeout((function(i){
        console.log(i); 
    })(i), 10)
}

var mobj = {
    price: 20.99, 
    get_price: function () {
        return this.price; 
    }
};

var customObj = Object.create(mobj); 
customObj.price = 19.99; 

delete customObj.price; 
document.writeln(customObj.get_price()); 

delete mobj.price; 
// delete customObj.price; - doing it again doesn't delete it either. 
document.writeln(customObj.get_price()); 

// 16. Pass by Value of by reference? 

// Primitive types are passed by value... objects are passed by reference. 
// https://snook.ca/archives/javascript/javascript_pass 

var num = 10, 
    name = 'TIMMMMM', 
    obj1 = {
        value: 'first value'
    },
    obj2 = {
        value: 'second value'
    },
    obj3 = obj2; 

function change(num, name, obj1, obj2){
    num = num*10; 
    name = "Tim Reilly",
    obj1 = obj2; 
    obj2.value = "new val"; 
}

change(num, name, obj1, obj2); 

document.write('num: ', num, ' name: ', name, ' obj1.value: ', obj1.value, ' obj2.value: ', obj2.value, ' obj3.value: ', obj3.value); 

document.writeln('*********'); 

// 17. Memoization: 
// How could you implement cache to save calculation time for a recursive fibonacci function? 



var fibonacci = (function() {
    var memo = {}; 

    function f(n){
        var value; 

        if (n in memo){
            value = memo[n]; 
        } else {
            if ( n === 0 || n === 1){
                value = n; 
            } else {
                value = f(n - 1) + f(n - 2); 
            }
            memo[n] = value; 
        }
        return value; 
    }
    return f; 
})(); 

document.writeln(fibonacci(10)); 

// 18. Cache Function Execution
// How could you cache execution of any function? 

function cacheFn(fn){
    var cache = {}; 

    return function(arg) {
        if(cache[arg]){
            return cache[arg]; 
        } else {
            cache[arg] = fn(arg); 
            return cache[arg]; 
        }
    }
}

cacheFn(123); 

// What if you are passing more than one argument? 

// First we have to use arguments to get all the parameters passed to the function and then we can generate key for the cache object.
// Generating key for the cache object could be tricky and one solution could be just get all the parameters and concatenate those. 

function r (){
    var args = arguments; 
    var key = [].slice.call(args).join(''); 
    if(cache[key]){
        return cache[key];
    } else {
        cache[key] = fn.apply(this, args); 
        return cache[key]; 
    }
}

// 19. JQuery Style Chaining...

function slow(callback) {
    setTimeout(function() {
        if(Math.random() > 0.5) {
            return callback("error 417", null)
        }
        callback(null, {id:123})
    }, 500);
}

function exec(fn){
    // write your code here. 
    console.log("EXECUTION"); 
}

var obj = {
    first: function() {console.log("first"); return obj; },
    second: function() {console.log("second"); return obj; },
    third: function() {console.log("third"); return obj; }
}

obj.first().second().third(); 

// 20. Animation
// How could you implement moveLeft animation?

function moveLeft(elem, distance) {
    var left = 0; 
    
    function frame() {
        left++; 
        elem.style.left = left + 'px'; 

        if(left == distance) {
            clearInterval(timeId);
        }
    }
    var timeId = setInterval(frame, 10); 
}

// 21 Curring - How would you implement currying for any functions. 

// Curring is partial invocation of a function. 
// Currying means the first few arguments of a function are pre-processed and a function is returned. 
// The returning function can add more arguments to the curried function. 
// It's like if you have given one or two spice to the curry and cooked a little bit, still you can add further spice to it. 

function addBase(base){
    return function(num) {
        return base + num; 
    }
}

var addTen = addBase(10); 
document.writeln(addTen(5)); 
document.writeln(addTen(80)); 

String.prototype.repeatify = function(num){
    for(var i= 0; i< num; i++){
        console.log(this); 
    }
}

'hello'.repeatify(4); 

String.prototype.repeaty = function(num){
    var s = ''; 

    for (var i = 0; i< num; i++){
        s = s + this; 
    }

    return s; 
}

document.writeln('helloagain'.repeaty(4)); 

String.prototype.repeaty = String.prototype.repeaty || function(times){
    console.log("you shouldn't see this"); 
}

document.writeln('cheese burger'.repeaty(4))


var fullName = 'John Doe'; 

var objjj = {
    fullName: 'TIMBO',
    prop: {
        fullName: 'CHEESE BURGER MAN', 
        getFullName: function() {
            return this.fullName;
        }
    }
};

document.writeln('objjj.prop.getFullName(): ', objjj.prop.getFullName()); 
var test = objjj.prop.getFullName; 
document.writeln(' test: ', test());

// test is implicitly set as a property of the global object. 

// call() and apply()

// we can fix this issue by forcing the context of the function using either the call()
// or apply() function. https://www.sitepoint.com/whats-the-difference-between-function-call-and-function-apply/ 


document.writeln(test.call(objjj.prop)); // this should give us CHEESE BURGER MAN; 

document.writeln(test.call(objjj)); // this should give us TIMBO

