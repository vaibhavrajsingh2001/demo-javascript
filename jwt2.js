const { connect } = require("tls");
const { request } = require("https");
const { get } = require("request");

const options = {
  secureProtocol: "TLSv1_method", // insecure version
  minVersion: "TLSv1.1", // insecure version
  maxVersion: "TLSv1.2",
};

const connection = connect(443, "www.abc.com", options, () => {});

const req = request(options, (res) => {});

const socket = get(options);
