const execa = require('execa');
app.get('/exec/:bar', (req, res) => {
    execa.command(req.params.bar);
});