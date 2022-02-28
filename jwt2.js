const { sign: jsonsign } = require("jsonwebtoken");

const token = jsonsign({ user: 'xyz' }, key, { algorithm: 'HS256' });
