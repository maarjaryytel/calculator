const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}

));

app.get('/', function(request, response){
    //console.log(__dirname);    
    response.sendFile(__dirname + '/index.html');
    //dir name näitab kaustu    
});

app.post('/', function(request, response){
    console.log(request.body);
    let num1=Number(request.body.num1);
    let num2=Number(request.body.num2);
    //liidame
    let result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    response.send(`${num1} + ${num2} = ${result}`);
})

app.listen(3000, function() {
    console.log('server is running on port 3000');
});

