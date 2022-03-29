const vm = require('vm');
app.post('/exec', (req, res) => {
  const code = req.body.code;
  vm.run(code)
});