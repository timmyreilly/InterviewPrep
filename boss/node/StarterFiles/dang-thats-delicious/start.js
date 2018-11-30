const mongoose = require('mongoose');

// Make sure we are running node 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log('🛑 🌮 🐶 💪 💩\nHey You! \n\t ya you! \n\t\tBuster! \n\tYou\'re on an older version of node that doesn\'t support the latest and greatest things we are learning (Async + Await)! Please go to nodejs.org and download version 7.6 or greater. 👌\n ');
  process.exit();
}

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
// mongoose.connect("mongodb://dang-thats-delicious-db:IYuvUlDXzTUZLSxFrNcTI14SvyoWJEBetHAmQS2Ye9JQDohIPCGsJmoDhwqbGJ9ePAwMblA65qYBE0nyzF4Aow%3D%3D@dang-thats-delicious-db.documents.azure.com:10255/?ssl=true"); 

const options = {user: process.env.USER, pass: process.env.PASSWORD };
mongoose.connect(process.env.HOST, options); 

mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!


// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
