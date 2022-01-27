const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());



// Doesn't work , getting error from api provider , cannot deploy to server ..

const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({
    target: 'https://www.metaweather.com/api/location/44418/', //original url
    changeOrigin: true,
    secure: true,
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));
app.listen(5010);
