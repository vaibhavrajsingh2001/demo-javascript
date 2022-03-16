const { sign: jsonsign1 } = require("jsonwebtoken");

const token = jsonsign({ user: "wxyz" }, key, { algorithm: "HS256" });
