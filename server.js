const express = require('express')
const path = require('path')
const app = express()

app.use(express.json());
var cors = require('cors');
app.use(cors());

const { mainModule } = require('process');
var spawn = require('child_process').spawn; 

//api
//const classification = require('./gotowest-train-api/classification.js')

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
    result = isClassificationLabel(argument);
    console.log("result : " + result);

})


//react router 
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, 'gotowest-train-web/build/index.html'));
})

async function isClassificationLabel(angles) {

    //debug 할 때는 arguments의 첫번째 값만 활용해서 계산해보도록 한다.
    //let argument = angles[0];

    let test_label;
    let argument = angles;

    console.log("workings in js");

    //load python 
    const pythonClassification 
        = spawn('python', ['gotowest-train-api/model.py', 
        argument[0], argument[1], argument[2], argument[3], argument[4], argument[5], argument[6], argument[7]]);

    
    //pid number
    console.log("pid : " + pythonClassification.pid.toString());

    pythonClassification.stdout.on('data', function(data) {
        //console.log(data.toString());
        test_label = data.toString();
    })  

    pythonClassification.stderr.on('data', function(data) {
        console.log(data.toString());
    
    })   

    return test_label;
   
}