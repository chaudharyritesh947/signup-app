const mongoose = require('mongoose');
const user = mongoose.Schema({
    name: {type: String, require},
    email: {type: String, unique: true, require},
    address: {type: String}, 
    password: {type: String}
})

const UserSchema = mongoose.model('UserSchema', user);
module.exports = {UserSchema};