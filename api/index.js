const express = require('express');
const app = express();
const root = '/messages-api/';



app.use(root+'/submitMessage',require("./screens/SubmitMessage"));






const port = 4000;
let server = app.listen(port, function() {
    console.info('server listening at ' + port);
});