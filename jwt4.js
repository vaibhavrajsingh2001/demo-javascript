import { sign as jsonsign } from "jsonwebtoken";

const token = jsonsign({ user: 'xyz' }, key, { algorithm: 'HS256' });
