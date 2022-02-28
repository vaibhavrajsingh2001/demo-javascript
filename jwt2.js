const { sign: jsonsign1 } = require("jsonwebtoken");

const token = jsonsign({ user: "xyz" }, key, { algorithm: "HS256" });
