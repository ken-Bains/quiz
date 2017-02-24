var storeController = require('../controller/store.js');

module.exports = function(app) {
	app.get('/scores', function(request, response) {
		storeController.scoresindex(request, response)
	})
	app.get('/questions', function(request, response) {
		storeController.questionsindex(request, response)
	})
	app.post('/customerAdd', function(request, response){
		storeController.addcustomer(request,response)
	})
	app.post('/addquestion', function(request, response){
		storeController.addquestion(request,response)
	})
	app.post('/addscore', function(request, response){
		storeController.addscore(request,response)
	})

}