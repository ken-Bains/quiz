var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
 name: String
}, {timestamps: true})
mongoose.model('Customer', CustomerSchema); 


var QuestionsSchema = new mongoose.Schema({
 question: String, 
 correct: String, 
 wrong1: String,
 wrong2: String
}, {timestamps: true})
mongoose.model('Questions', QuestionsSchema); 

var ScoresSchema = new mongoose.Schema({
 name: String, 
 score: Number, 
 percentage: Number
}, {timestamps: true})
mongoose.model('Score', ScoresSchema); 

