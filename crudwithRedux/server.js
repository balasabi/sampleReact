const express = require('express');
//const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3008;
const app = express();
//app.use(favicon(__dirname + '/build/favicon.ico'));
//app.use(favicon(__dirname + '/public/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/internal/healthcheck', function (req, res) {
    return res.status(200).json({
        status: 'success',
        message: 'ConfirmD React App running successfully'
    });
});

app.get('/ping', function (req, res) {
    return res.send('pong');
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    //res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port);