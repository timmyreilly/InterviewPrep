// Program 5 Classical Inheritance 
// https://www.crockford.com/javascript/inheritance.html 

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

// Was a but now's a - relationship 