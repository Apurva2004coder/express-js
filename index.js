//$=interpolate
const express = require('express');
 const app = express();
const port = 3000
 app.get('/', (req, res) => {
    res.send('Hello its apurava')
 });

//need to install express everytime me work on new project
//npm init -y
//npm install express
//npm install nodemon --save-dev
//npx nodemon index.js
//json java script object notation

 app.get('/file', (req, res) => {
    res.sendFile('./index.html', {root:__dirname })
});

app.get('/json', (req, res) => {
    res.json({name:'apurva',age:22,city:'pune'})
 });

 app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
 });

//post request
app.post('/about', (req, res) => {
    res.send('post request received')
});

app.put('/user', (req, res) => {
    res.send('put request received')
});
app.delete('/user1', (req, res) => {
    res.send('delete request received')
});


app.get('/', (req, res) => {
    res.send('Hello its apurava')
}).post('/about',(req,res)=>{
    res.send('Post request received')
}).put('/user',(req,res)=>{

    res.send('Put request received')
}).delete('/user1',(req,res)=>{
    res.send('Delete request received')
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
