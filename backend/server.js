var request = require('request');
var express = require('express');

var app = express();

let client_id = "";
let client_secret = "";

app.get('/getToken', function (req, res) {
    console.log("request recieved")
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            token = body.access_token;
            console.log(token)
            res.json(token)
        } else {
            res.json({ error: "failed to generate token" })
        }
    });
});

app.listen(7000, () => console.log("server is running..."))
