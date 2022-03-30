import execa from "execa";
const middleWare = (req, res) => {
  const x = "ls " + req.body.args;
  execa.command(x);
};
