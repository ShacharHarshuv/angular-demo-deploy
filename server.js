const express = require('express');
const path = require('path');

const app = express();

//Serve static files from the dist directory
app.use(express.static(__dirname + '/dist/angularInNode'));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/angularInNode/index.html'));
});

//Start the app by listening to the Heroku default port
app.listen(process.env.PORT || 8080, function(){
    console.log("You're listening to port 8080... ");
});