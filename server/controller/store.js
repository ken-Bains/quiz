var mongoose = require('mongoose');
var Customer = mongoose.model('Customer')
var Questions = mongoose.model('Questions')
var Score = mongoose.model('Score')

module.exports = {
	scoresindex: function(req, res) {
		Score.find({}, function(err, score) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(score);
			}
		})
	}, 
	questionsindex: function(req, res) {
		Questions.find({}, function(err, questions) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(questions);
			}
		})
	}, 


	addquestion: function(request, response) {
		var questions = new Questions(request.body);
		questions.save(function(err) {
	    	if(err) {
	      		console.log('something went wrong questions', err);
	      		response.json(err);

	    	} else { // else console.log that we did well and then json to the root route
	      		console.log('successfully added a questions!');
	      		response.json(questions);
	    	}
	  	})
	},
	addscore: function(request, response) {
		var score = new Score(request.body);
		score.save(function(err) {
	    	if(err) {
	      		console.log('something went wrong score', err);
	      		response.json(err);

	    	} else { // else console.log that we did well and then json to the root route
	      		console.log('successfully added a score!');
	      		response.json(score);
	    	}
	  	})
	}
	


}