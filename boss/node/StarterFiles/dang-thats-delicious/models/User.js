const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
mongoose.Promise = global.Promise; 

const md5 = require('md5');
const validator = require('validator'); 
const monogodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('password-local-mongoose'); 

const userSchema = new Schema({
    email: {
        type: String, 
        unique: true,
        lowercase: true,
        trim: true, 
        validate: [validator.isEmail, "Invalid Email Address"],
        required: 'Please supply an email address' 
    },
    name: {
        type: String, 
        required: 'Please supply a name', 
        trim: true 
    }
});

module.exports = mongoose.model('User', userSchema); 