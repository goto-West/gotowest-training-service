const express = require('express')
const path = require('path')
const app = express()
var cors = require('cors');
const bodyParser = require('body-parser');
const { mainModule, send } = require('process');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());



var spawn = require('child_process').spawn; 

//api
//const classification = require('./gotowest-train-api/classification.js')

app.listen(3001, function(){
    console.log('listening on 3001')
})

//app.use(express.static(path.join(__dirname, 'gotowest-train-web/build')));

//classification response

app.get('/classification', async function(req,res){

    //unit test
    console.log("start");

    let argument = await req;
    //test argument
    //let argument = [160, 145, 176, 164, 112, 72, 176, 176];

    //load classification api
    result = isClassificationLabel(argument);
    console.log("result : " + result);
    res.send(result);

})

app.get('/test', function(req,res){

    console.log (req);

})


//React.js router
/* 
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, 'gotowest-train-web/build/index.html'));
})
*/

async function isClassificationLabel(angles) {

    //debug 할 때는 arguments의 첫번째 값만 활용해서 계산해보도록 한다.
    //let argument = angles[0];

    let test_label;
    let argument = angles;

    console.log("classification in js");
    console.log(angles);

    //load python 
    const pythonClassification 
        = spawn('python', ['gotowest-train-api/model.py', 
        argument[0], argument[1], argument[2], argument[3], argument[4], argument[5], argument[6], argument[7]]);

    
    //pid number
    console.log("pid : " + pythonClassification.pid.toString());

    pythonClassification.stdout.on('data', function(data) {
        console.log(data.toString());
        test_label = data.toString();
    })  

    pythonClassification.stderr.on('data', function(data) {
        console.log(data.toString());
    
    })   

    console.log(test_label);

    return test_label;
   
}