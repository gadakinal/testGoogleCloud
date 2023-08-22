const functions = require('@google-cloud/functions-framework');
    functions.http('helloGET', (req, res) => {
    res.send('hello world');
});
