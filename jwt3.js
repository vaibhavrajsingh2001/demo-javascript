import tls from "tls";
import https from "https";
import request from "request";

const options = {
  secureProtocol: "TLSv1_method", // insecure version
  minVersion: "TLSv1.1", // insecure version
  maxVersion: "TLSv1.2",
};

const connection = tls.connect(443, "www.abc.com", options, () => {});

const req = https.request(options, (res) => {});

const socket = request.get(options);
