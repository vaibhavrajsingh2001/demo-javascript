import tls from "tls";
import https from "https";
import request from "request";

const connection = tls.connect(443, 'www.abcd.com', {
    secureProtocol: "TLSv1_method", // insecure version
    minVersion: "TLSv1.1", // insecure version
    maxVersion: "TLSv1.2",
}, () => { })

const req = https.request({
    secureProtocol: "TLSv1_method", // insecure version
    minVersion: "TLSv1.1", // insecure version
    maxVersion: "TLSv1.2",
}, (res) => { });

const socket = request.get({
    secureProtocol: "TLSv1_method", // insecure version
    minVersion: "TLSv1.1", // insecure version
    maxVersion: "TLSv1.2",
});
