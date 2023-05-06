#!/usr/bin/env node
const https = require('https')

https.get({
    hostname: 'google.com',
    pathname: '/'
}).on('response', res => {
    console.log(res.rawHeaders)
})
