// Let's practice programming and learn JavaScript 

// Found a list on Reddit: 
// https://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/ 

/*
General
Find the most frequent integer in an array
*/
var p = '';


const arrayOne = [1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 3, 1, 1, 1];

// Here's a naive way: 

var max = 0;
var most;
var count = 0;
for (var j = 0; j < arrayOne.length; j++) {
    number = arrayOne[j];

    count = 0;
    for (var i = 0; i < arrayOne.length; i++) {
        if (number === arrayOne[i]) {
            count += 1;
        }
    }
    if (count > max) {
        max = count;
        most = number;
    }
}

document.writeln('most: ', most, ' count: ', max)

// Can we do it with a dictionary? 
var countDictionary = {};
arrayOne.forEach(number => {
    if (countDictionary[number]) {
        countDictionary[number] += 1;
    } else {
        countDictionary[number] = 1;
    }
})

max = 0;
most = 0;
sortable = Object.keys(countDictionary).forEach(key => {
    if (countDictionary[key] > max) {
        max = countDictionary[key];
        most = key;
    }
})

document.writeln('most: ', most, ' count: ', max)


document.writeln('count dict: ', JSON.stringify(countDictionary));
document.writeln('sorted count dict: ', JSON.stringify(sortable));

/*
Find pairs in an integer array whose sum is equal to 10 
(bonus: do it in linear time)
*/

document.writeln('***************');

var arrayTwo = [5, 5, 6, 4, 2, 3, 9, 8, 1, 2, 3, 4];

pairs = [];
for (var i = 0; i < arrayTwo.length; i++) {
    for (var j = 0; j < arrayTwo.length; j++) {
        if (arrayTwo[j] + arrayTwo[i] == 10) {
            pairs.push(['y', arrayTwo[j], arrayTwo[i]]);
        }
    }
}

document.writeln(pairs);

// That's a pretty dumb solution. Can we do it with a dictionary? 


/*
Given 2 integer arrays, determine of the 2nd array is a rotated version of the 1st array. 
Ex. Original Array A={1,2,3,5,6,7,8} Rotated Array B={5,6,7,8,1,2,3} 
*/

document.writeln('*************');

var aArray = [1, 2, 3, 4, 5, 6, 7, 8];
var bArray = [4, 5, 6, 7, 8, 1, 2, 3];  // These have been rotated... 
var cArray = aArray;

document.writeln(cArray == aArray);

if (JSON.stringify(aArray) == JSON.stringify(bArray)) {
    document.writeln("They're the smae!");
} else {
    for (var i = 0; i < aArray.length; i++) {
        document.writeln('cArray: ', cArray);
        cArray.unshift(cArray.pop());

        if (JSON.stringify(cArray) == JSON.stringify(bArray)) {
            document.writeln('WOOP THEY CAN BE ROTATED');
        }
    }

}



/*
Write fibbonaci iteratively and recursively (bonus: use dynamic programming)

*/

function fib(en) {
    if (en <= 2) {
        return 1;
    }
    return fib(en - 1) + fib(en - 2);
}

for (var i = 1; i < 5; i++) {
    document.writeln(fib(i));
}
document.writeln('**************');

/*
Find the only element in an array that only occurs once.
*/

var arrayThree = [1, 2, 3, 4, 5, 4, 1, 9, 3, 2, 5];

/*
we need to see if this value exists anywhere else on the array. 
if it does than we're good. 
If we can't find it anywhere else than we know we have a unique value. 

to check if it's anywhere on the array. We need to grab that value. And compare it to every
other value. 

*/

var unique = false;
var uniqueValue = '';

for (var i = 0; i < arrayThree.length; i++) {
    var comper = arrayThree[i];
    for (var j = 0; j <= arrayThree.length; j++) {
        var comparee = arrayThree[j];
        // document.writeln(' i: ', i, ' j: ', j, ' || comper: ', comper, ' comparee: ', comparee); 

        if (j != i && comper == comparee) {
            unique = false;
            continue
        } else if (j == arrayThree.length) {
            document.writeln("we couldn't find a match for: ", arrayThree[i]);
        }
    }
}




document.writeln('unique: ', unique, ' uniqueValue: ', uniqueValue);

// GAAAH I'm going to have to come back to this one... 
document.writeln('**************');

/* 
Find the common elements of 2 int arrays
*/

var arrA = [1, 2, 3, 4, 5, 3, 2, 1, 9, 9, 9, 9, 9]
var arrB = [2, 3, 4, 2, 1, 9];

/*
Make a dictionary of all similar values? 
the key being the shared value and the value in the dictionary being the number of times shared? 
*/

commonElements = {};

for (var i = 0; i < arrA.length; i++) {
    for (var j = 0; j < arrB.length; j++) {
        if (arrA[i] == arrB[j]) {
            if (commonElements[arrA[i]] == null) {
                commonElements[arrA[i]] = 1
            }
            commonElements[arrA[i]] += 1;
        }
    }
}

document.writeln(JSON.stringify(commonElements));

document.writeln('**************');


/*
Implement binary search of a sorted array of integers
*/

var sortA = arrA.sort((a, b) => a - b);
document.writeln(sortA);

var print = document.writeln;

document.writeln(Math.floor(arrA.length / 2));

// var findBinarily2 = function(arr, value) {
//     var halfway = arr[Math.floor(arr.length/2)]; 
//     if(halfway == value){
//         return true; 
//     } else {
//         return findBinarily2(a.slice(0,halfway)) || findBinarily2(a.slice(halfway))
//     }
//     document.writeln(halfway); 
//     return false; 
// }

function binaryIndexOf(searchElement) {

    var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;
    var resultIndex;

    while (minIndex <= maxIndex) {
        resultIndex = currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = this[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

    return ~maxIndex;
}


Array.prototype.binaryIndexOf = binaryIndexOf;

var arr = [0, 1, 2, 4, 5, 6, 7, 8, 9];
// arr.splice(Math.abs(arr.binaryIndexOf(3)), 0, 3);
// document.writeln(arr); 
document.writeln(arr.binaryIndexOf(7));

/*
Implement binary search in a rotated array (ex. {5,6,7,8,1,2,3})
*/
document.writeln("**********");

// var sortB = [5, 6, 7, 8, 1, 2, 3].sort((a, b) => b - a);
var rott = [5, 6, 7, 8, 1, 2, 3]

// rotate until sorted

// store number of rotations

// find index binarily

// subtract number of rotations. 

var roti = rott.slice();
var rotationCount = 0;

// roti.unshift(roti.pop());

document.writeln(roti);

rottSorted = rott.sort((a, b) => { return a - b });

document.writeln(rottSorted, ' roti: ', roti); 
document.writeln(JSON.stringify(roti) == JSON.stringify(rottSorted)); 

// while (JSON.stringify(roti) != JSON.stringify(rottSorted)) {
//     document.writeln('ya');
// }
//     rotationCount = rotationCount + 1; 
//     roti.unshift(roti.pop()); 
//     document.writeln(roti); 
// }



/*
Use dynamic programming to find the first X prime numbers
Write a function that prints out the binary form of an int
Implement parseInt
Implement squareroot function
Implement an exponent function (bonus: now try in log(n) time)
Write a multiply function that multiples 2 integers without using *
HARD: Given a function rand5() that returns a random int between 0 and 5, implement rand7()
HARD: Given a 2D array of 1s and 0s, count the number of "islands of 1s" (e.g. groups of connecting 1s)
Strings
Find the first non-repeated character in a String
Reverse a String iteratively and recursively
Determine if 2 Strings are anagrams
Check if String is a palindrome
Check if a String is composed of all unique characters
Determine if a String is an int or a double
HARD: Find the shortest palindrome in a String
HARD: Print all permutations of a String
HARD: Given a single-line text String and a maximum width value, write the function 'String justify(String text, int maxWidth)' that formats the input text using full-justification, i.e., extra spaces on each line are equally distributed between the words; the first word on each line is flushed left and the last word on each line is flushed right
Trees
Implement a BST with insert and delete functions
Print a tree using BFS and DFS
Write a function that determines if a tree is a BST
Find the smallest element in a BST
Find the 2nd largest number in a BST
Given a binary tree which is a sum tree (child nodes add to parent), write an algorithm to determine whether the tree is a valid sum tree
Find the distance between 2 nodes in a BST and a normal binary tree
Print the coordinates of every node in a binary tree, where root is 0,0
Print a tree by levels
Given a binary tree which is a sum tree, write an algorithm to determine whether the tree is a valid sum tree
Given a tree, verify that it contains a subtree.
HARD: Find the max distance between 2 nodes in a BST.
HARD: Construct a BST given the pre-order and in-order traversal Strings
Stacks, Queues, and Heaps
Implement a stack with push and pop functions
Implement a queue with queue and dequeue functions
Find the minimum element in a stack in O(1) time
Write a function that sorts a stack (bonus: sort the stack in place without extra memory)
Implement a binary min heap. Turn it into a binary max heap
HARD: Implement a queue using 2 stacks
Linked Lists
Implement a linked list (with insert and delete functions)
Find the Nth element in a linked list
Remove the Nth element of a linked list
Check if a linked list has cycles
Given a circular linked list, find the node at the beginning of the loop. Example: A-->B-->C --> D-->E -->C, C is the node that begins the loop
Check whether a link list is a palindrome
Reverse a linked list iteratively and recursively
Sorting
Implement bubble sort
Implement selection sort
Implement insertion sort
Implement merge sort
Implement quick sort
*/