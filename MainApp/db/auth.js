require('dotenv').config();

const mongoose = require("mongoose")
const mongoDB = process.env.MONGO_URL;
console.log(mongoDB)
mongoose.connect(mongoDB)
    .then( () => console.log('Connected to MongoDB'))
    .catch(err => console.log('Connection error:', err));
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  terms: String,
  userID: String,
  persona: Number,
  chats: String,
  resume: String,
  details: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;