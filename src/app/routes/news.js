const dbConnection = require('../../config/dbConnection')

module.exports = app => {
	const connection = dbConnection()

	app.get('/', (req, res) => {
		connection.query('select * from news', (error, result) => {
			if(error) throw error
			res.render('news/news', {news: result})
		})
	})
	app.post('/news', (req, res) => {
	connection.query('insert into news (title, news) values ("'+req.body.title+'","'+req.body.news+'")', (error, result) => {
		if(error) throw error
		res.redirect('/')
		})
	})
	app.get('/delete/:id', (req,res)=>{
		
		connection.query('delete from news where id='+req.params.id, (error, result)=>{
			if(error) throw error
			res.redirect('/')
		})

	})
	app.put('/up/:id', (req, res) => {
		
		connection.query('select * from news where id='+req.params.id, (error, result) => {
			if(error) throw error
			
			res.send( {result})
		})
	})
	app.post('/up_form/:id', (req, res) => {
		
		connection.query('update news set title="'+req.body.title+'", news="'+req.body.news+'" where id='+req.params.id,
		 (error, result) => {
			if(error) throw error
			
			res.redirect('/')
		})
	})


}
