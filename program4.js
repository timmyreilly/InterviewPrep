// Object literal...
// Still learning: https://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/ 

// Need to instatiate the playfield. 
// This is helpful: http://www.crockford.com/javascript/private.html 

function robot(param) {
    this.location = param.location;
    var secret = 'secretssss';
    var that = this; 

    this.moveRight = function() {
        this.location = this.location + 1; 
    }

}

var myRobot1 = new robot({location: 0}); 
var myRobot2 = new robot({location: 3}); 

robot.prototype.moveLeft = function() {
    return this.location = this.location -1; 
}

document.writeln('1 loc: ', myRobot1.location, ' 2 loc: ', myRobot2.location); 
myRobot1.moveLeft(); 
myRobot2.moveLeft(); 
document.writeln('1 loc: ', myRobot1.location, ' 2 loc: ', myRobot2.location); 

myRobot1.moveRight();
myRobot1.moveRight();
myRobot2.moveRight();
myRobot2.moveRight();
myRobot2.moveRight();

document.writeln('1 loc: ', myRobot1.location, ' 2 loc: ', myRobot2.location); 


/*
var playField = []; 

playField[50] = 'parachute 1'; 
playField[25] = 'parachute 2'; 

document.writeln(playField); 

var r, robotAgain = {
    locations: {
        parachute: 0, 
        playFieldLocation: 0
    }, 

    init: function() {
        r = this.locations; 
    }, 

    placeRobot: function(playField){

    }
}

var robot = function(spec) {

    var that = {}; 
    var location = 0; 
    var parachuteFound = false; 
    var buddyFound = false; 

    moveLeft = function() {
        this.location = this.location+1; 
    }; 

    moveRight = function() {
        this.location = this.location -1; 
        
    };  

    findBuddy = function(spot) {
        while (parachuteFound == false) {
            moveLeft(); 
            moveRight(); 
            moveLeft(); 
            document.writeln(this.location);
            // check for parachute location. 
            
        }

        while(buddyFound == false); 
    }

}

var robot1 = robot(); 
var robot2 = robot(); 
var startingPosition1 = Math.floor((Math.random() * 100));
var startingPosition2 = Math.floor((Math.random() * 100));

robot1.location = startingPosition1; 
robot2.location = startingPosition2;  

document.writeln('robot1: ', robot1.location, ' robot2: ', robot2.location); 

while(robot1.buddyFound == false) {
    
}
*/ 


