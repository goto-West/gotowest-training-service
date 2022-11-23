const express = require('express')
const path = require('path')
const app = express()


app.use(express.json());
var cors = require('cors');
app.use(cors());

//api
const classification = require('./gotowest-train-api/classification.js')
const result = "empty";

app.listen(3000, function(){
    console.log('listening on 3000')
})

app.use(express.static(path.join(__dirname, 'gotowest-train-web/build')));

//classification response
app.get('/classification', function(req,res){
    //unit test
    console.log("classification request");

    //test argument
    let argument = [160, 145, 176, 164, 112, 72, 176, 176];

    //load classification api
    result = classification.isClasificationLabel(argument);
    console.log("result : " + result);

})



//react router 
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, 'gotowest-train-web/build/index.html'));
})

