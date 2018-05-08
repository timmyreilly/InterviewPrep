// Object literal...

// Need to instatiate the playfield. 

var playField = {
    width = 1000, 
    contains = []
}

var robot = {
    location = 0,
    parachuteFound = false, 
    buddyFound = false, 

    moveLeft() {
        this.location = this.location+1; 
    },
    moveRight() {
        this.location = this.location -1; 
        
    }, 

    findBuddy(spot) {
        while (parachuteFound == false) {
            moveLeft(); 
            moveRight(); 
            moveLeft(); 
            document.writeln(this.location);
            // check for parachute location. 
            if(spot.contains)
        }

        while(buddyFound == false); 
    }

}

robot1 = robot; 
robot2 = robot; 

robot1.location = Math.random() * 100; 
robot2.location = Math.random() * 100; 

while(robot1.buddyFound == false) {
    
}
