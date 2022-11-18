var spawn = require('child_process').spawn;

// main function
async function classification() {

    let argument = [160, 145, 176, 164, 112, 72, 176, 176];

    console.log("workings in js");
    //load python 
    const pythonClassification 
        = spawn('python', ['model.py', 
        argument[0], argument[1], argument[2], argument[3],
        argument[4], argument[5], argument[6], argument[7]]);
    
    //pid number
    console.log("pid : " + pythonClassification.pid.toString());

    pythonClassification.stdout.on('data', function(data) {
        console.log(data.toString());
    })  
    
    pythonClassification.stderr.on('data', function(data) {
        console.log(data.toString());
        
    })   
       
}