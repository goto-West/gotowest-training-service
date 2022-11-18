
//const { spawn } = require('child_process');
//  let label_idx = ['arm_stretch_up', 'arm_stretch_upper_right', 'hurray',
        //        'raise_right_leg', 'side_stretch_left_leg',  ' right_side_stretch'];

var spawn = require('child_process').spawn;        
// main function
async function IsClasificationLabel(argument, label) {

    //debug 할 때는 arguments의 첫번째 값만 활용해서 계산해보도록 한다.
    //let argument = angles[0];
    let test_label;

    //test sample data
    //let argument = [160, 145, 176, 164, 112, 72, 176, 176];

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
        test_label = data.toString();
    })  
    
    pythonClassification.stderr.on('data', function(data) {
        console.log(data.toString());
        
    })   

    if(test_label == label) return true;
    else return false;
       
}
