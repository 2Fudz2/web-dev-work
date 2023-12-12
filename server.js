const express = require('express')
const server = express();
const port = 3000;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();



      
server.use(express.static('public'));

server.get('/', (req, res) => {
    //res.send('Web Programming is fun!')
    /// send the static file
    res.sendFile('index.html', (err) => {
        if (err) {
            console.log(err);

        }
    })
});

/Get request with parameter/
server.get('/form/:name', (req, res) => {
    const routeParams = req.params;
    const quote = routeParams.quote
    res.send('GET: Hello, ' + quote);
});


server.get('/form', (req, res) => {
    res.send('GET: Hello!');
});

server.post('/form', jsonParser, (req, res) => {
    const body = req.body
    const quote = body.quote
    
    res.send(quote);
});

server.listen(port, () => {
    console.log(`My first app listening on port ${port}!`)
});
// what is a static webpage


//POST request by content.html page
server.post('/form', jsonParser, (req,res) =>{
    const body = req.body;
    const name = body.name;
    const email = body.email;
    const message = body.message;
    res.send(`POST by form.js - name = ${name} , email = ${email} , message = ${message}`);
});