const express = require('express');
const app = express();
const port = 3000;

const keys = [];
const clients = [];
const windows = 3;

for(let i=0; i<windows; i++){
	keys.push(`12${i}`);
}

app.get('/', (req, res) => {
	res.send('Olaa enfermeira');
});
app.post('/register', (req, res) => {
});
app.get('/unlock', (req, res) => {
	console.log(`First key is: ${keys[0]}`);
	res.send('Olaa enfermeira');
});

app.listen(port, () => {
	console.log(`Rodaaaando, mah oieee: http://localhost:${port}`);
});
