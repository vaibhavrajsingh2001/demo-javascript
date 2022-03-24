const { connect } = require("tls");
const { request } = require("https");
const { get } = require("request");

const connection = connect(
  443,
  "www.abcd.com",
  {
    secureProtocol: "TLSv1_method", // insecure version
    minVersion: "TLSv1.1", // insecure version
    maxVersion: "TLSv1.2",
  },
  () => {}
);

const req = request(
  {
    secureProtocol: "TLSv1_method", // insecure version
    minVersion: "TLSv1.1", // insecure version
    maxVersion: "TLSv1.2",
  },
  (res) => {}
);

const socket = get({
  secureProtocol: "TLSv1_method", // insecure version
  minVersion: "TLSv1.1", // insecure version
  maxVersion: "TLSv1.2",
});
