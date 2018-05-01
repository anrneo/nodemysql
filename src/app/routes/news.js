const dbConnection = require('../../config/dbConnection')

module.exports = app => {
	const connection = dbConnection()

	app.get('/', (req, res) => {
		connection.query('select * from news', (err, result) => {
			console.log(result)

			res.render('news/news', {
				news: result

			})
	})
})
app.post('/news', (req, res) => {
	const {title, news} = req.body
	connection.query('insert into news set?', {
		title,
		news
	}, (err, result) => {
		res.redirect('/')
	})
})
}
