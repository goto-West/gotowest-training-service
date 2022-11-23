const express = require('express')
const app = express()
const path = require('path')
import classification from '/gotowest-train-server/classification'

//for ajax
app.use(express.json());
var cors = require('cors');
app.use(cors());


app.listen(3000, function(){
    console.log('listening on 3000')
})

app.use(express.static(path.join(__dirname, 'gotowest-train-web/build')));

app.get('/', function(요청,응답){
    응답.sendFile(path.join(__dirname, 'gotowest-train-web/build/index.html'));
})


//react router
app.get('*', function(요청,응답){
    응답.sendFile(path.join(__dirname, 'gotowest-train-web/build/index.html'));
})