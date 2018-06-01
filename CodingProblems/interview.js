function hello() {
    return 'Hello world - JavaScript!';
}

console.log(hello());

var x = 123211

var y = x.toString();

console.log(checkIntegerPalidrone(x.toString()));

function checkIntegerPalidrone(y) {
    var rearCounter = y.length - 1;
    var frontCounter = 0;
    for (var i = 0; i < y.length / 2; i++) {
        if (y[rearCounter] == y[frontCounter]) {
            rearCounter -= 1;
            frontCounter += 1;
            i++;
        } else {
            return false;
        }
    }
    return true;
}



// integer 


// console.log(123 % 120); 


y = 1234321

// console.log(y / 1000000); 

function checkIntegerPalindromNoStrings(y) {

    console.log(y % 10);
    for (var i = 0; i < 10; i++) {
        var camparisonValue = y % 10 ^ i;

    }
}

// checkIntegerPalindromNoStrings(y); 

console.log("*********************");

// 
// X Start location: 0
// X Jump Rate: 3
// 
// Y Start location: 4
// Y Jump Rate: 2 
// 0 3 4 2

function DoTheyBumpIntoEachOther(kOneLocation, kOneSpeed, kTwoLocation, kTwoSpeed) {
    if (kOneLocation == kTwoLocation) {
        return `YES... ${kOneLocation} = ${kTwoLocation}`;
    } else if (kOneSpeed < kTwoSpeed) {
        return `NO ${kOneSpeed} is smaller than ${kTwoSpeed}`;
    } else if (kOneSpeed > kTwoSpeed && kOneLocation > kTwoLocation) {
        return `NO ${kOneSpeed} is larger than ${kTwoSpeed} and one is at ${kOneLocation} and has passed ${kTwoLocation}`;
    } else {
        return (DoTheyBumpIntoEachOther(kOneLocation + kOneSpeed, kOneSpeed, kTwoLocation + kTwoSpeed, kTwoSpeed))
    }
}

// Kangoroo one is behind and moving slowly: 
console.log(DoTheyBumpIntoEachOther(0, 1, 4, 2))

// Kangoroo one is behind a moving quickly: 
console.log(DoTheyBumpIntoEachOther(0, 2, 1, 1));

// Kangaroo one is behind but jumps ahead... 
console.log(DoTheyBumpIntoEachOther(0, 4, 1, 1));

// KangorooOne is behind but lands on the one moving slowly: 
console.log(DoTheyBumpIntoEachOther(0, 3, 4, 2));

// for (var xOne = 0; xOne < 3; xOne++){
//     for (var vOne = 1; vOne < 3; vOne++) {
//         for (var xTwo = 0; xTwo < 3; xTwo++){
//             for(var vTwo = 1; vTwo < 3; vTwo++) {
//                 console.log(`xOne: ${xOne} vOne ${vOne} xTwo ${xTwo} vTwo ${vTwo}`);
//                 console.log(DoTheyBumpIntoEachOther(xOne, vOne, xTwo, vTwo)); 
//             }
//         }
//     }
// }

// for (var t = 1111; t < 2222; t++) {
//     var g = t.toString();
//     if (g[0] == g[2]) {
//         console.log(`${g[0]} is the same as ${g[2]}`);
//     } else {
//         console.log(DoTheyBumpIntoEachOther(g[0], g[1], g[2], g[3]));
//     }
// }
console.log("**********************l1**v1*l2*v2**********"); 
console.log(DoTheyBumpIntoEachOther(0, 0, 0, 0));
console.log(DoTheyBumpIntoEachOther(0, 0, 0, 0));
console.log(DoTheyBumpIntoEachOther(0, 0, 0, 0));
console.log(DoTheyBumpIntoEachOther(0, 0, 0, 0));
console.log(DoTheyBumpIntoEachOther(0, 0, 0, 0));
console.log(DoTheyBumpIntoEachOther(0, 0, 0, 0));
console.log(DoTheyBumpIntoEachOther(0, 0, 0, 0));
console.log(DoTheyBumpIntoEachOther(0, 0, 0, 0));
console.log(DoTheyBumpIntoEachOther(0, 0, 0, 0));




// 
// 
