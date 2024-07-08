// import
const express = require('express');
const path = require('path');
const server = express();
const port = 3000;


// sTATIC FILES
server.use(express.static(path.join(__dirname, 'public')));



// Links
server.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/' + "home.html");
})

server.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/' + "home.html");
})

server.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/' + "about.html");
})

server.get('/skills', (req, res) => {
    res.sendFile(__dirname + '/public/' + "skills.html");
})

server.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/' + "contact.html");
})

// Listen on port 3000
server.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})