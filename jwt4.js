import { connect } from "tls";
import { request } from "https";
import { get } from "request";

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
