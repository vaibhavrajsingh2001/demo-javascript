import { connect } from 'tls'
import { request } from 'https'
import { get } from 'request'

const options = {
    secureProtocol: 'TLSv1_method', // insecure version
    minVersion: 'TLSv1.1', // insecure version
    maxVersion: 'TLSv1.2'
}

const connection = tls.connect(443, 'www.abc.com', options, () => { })

const req = https.request(options, res => {  })

const socket = request.get(options)