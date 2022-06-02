var request = require('request');
var express = require('express');

var app = express();

let client_id = "b9e27a19aedb47bbabc7f67f46c14357";
let client_secret = "d9431a7b35bd418ab6e27d2e285980c4";

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