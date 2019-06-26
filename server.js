var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var request = require('request');
const path = require('path');
const router = express.Router();

// app.get('/', function(req, res) {
//     res.send('Hello World2');
// })

app.use(bodyParser.json());
app.post('/', function(req, res) {

    request.post('https://textbelt.com/text', {
        form: {
            phone: (req.body.toPhoneNumber),
            message: (req.body.textMessage),
            key: 'textbelt',
        },
    }, function(err, httpResponse, body) {
        if (err) {
            console.error('Error:', err);
            return;
        }
        console.log(JSON.parse(body));
    })


    res.send(req.body.textMessage);
    console.log("Message: " + req.body.textMessage);
    console.log("Message sent to Phone Number: " + req.body.toPhoneNumber);

})
app.use(express.static(path.join(__dirname, '/public')));

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));

    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})