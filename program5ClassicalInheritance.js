// Program 5 Classical Inheritance 
// https://www.crockford.com/javascript/inheritance.html 

/* 
For sugar... Who doesn't love sugar?  
*/

Function.prototype.method = function(name, func) {
    this.prototype[name] = func; 
    return this; 
}

// it returns this because we don't need it to return anything and allows for cascade style programming

Function.method('inherits', function(parent) {
    this.prototype = new parent(); 
    var d = {}, p = this.prototype; 
    this.prototype.constructor = parent; 

    this.method('uber', function uber(name) {
        if(!(name in d)) {
            d[name] = 0; 
        }

        var f, r, t = d[name], v = parent.prototype; 
        if(t) {
            while(t) {
                v = v.constructor.prototype; 
                t -= 1; 
            }
            f = v[name] 
        } else {
            f = p[name]; 
            if (f == this[name]) {
                f = v[name]; 
            }
        }
        d[name] += 1; 
        r = f.apply(this, Array.prototype.slice.apply(arguments, [1])); 
        d[name] -= 1; 
        return r; 
    });
    return this; 
})

// Again we augment Function. We make an instance of the parent class and use it as the new prototype. We also correct the constructor field, and we add the uber method to the prototype as well. 

// The uber method looks for the named method in its own prototype. This is the function to incoke in the case of parasitic inheritance or object augmenetation. 
// If we are doing classical inheritance, then we need to find the function in the parent's prototype. The return statement uses the function's apply method to invoke the function, explicitly setting this and passing and array of parameters. 
// The parameters(if any) are obtained from the arguments array. Unfortunately, the arguments array is not a truf array, so we have to use apply again to inoke the array slice method. 

// The swiss method: 

Function.method('swiss', function(parent) {
    for(var i = 1; i < arguments.length; i += 1) {
        var name = arguments[i]; 
        this.prototype[name] = parent.prototype[name]; 
    }
    return this; 
});


function Parenizor(value) {
    this.setValue(value); 
} 

Parenizor.method('setValue', function(value) {
    this.value = value; 
    return this; 
});

Parenizor.method('getValue', function() {
    return this.value; 
});

Parenizor.method('toString', function() {
    return '(' + this.getValue() + ')'; 
});

myParenizor = new Parenizor(0); 
myString = myParenizor.toString();

console.log(myString); 
 

function ZParenizor(value) {
    this.setValue(value); 
}

ZParenizor.inherits(Parenizor); 

ZParenizor.method('toString', function() {
    if(this.getValue()) {
        return this.uber('toString'); 
    }
    return "-0-" 
})

var myZParenizor = new ZParenizor(0); 
myString = myZParenizor.toString(); 

// Whoa parasitic inheritance. 

function ZParenizor2(vaue) {
    var that = new Parenizor(value); 
    that.toString = function() {
        if(this.getValue()) {
            return this.uber('toString'); 
        }
        return "-0-" 
    };
    return that; 
}

// Was a but now's a - relationship - still has access to the priveledged methods. 
// Whaaa 
// We can call the method method at any time, and all present and future instances of the class will have that method. 
// Inheritance works retroactively. All present and future instances of the class wil lhave that method. 

// Object Augmentation allows you to retroactively add methods to objects. 

