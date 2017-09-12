const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.listen(process.env.PORT || port, (err) => {
	if (err) {
		return console.log('An error happened: ', err);
	}
	console.log(`Server spinning on port ${process.env.PORT || port}`);
})