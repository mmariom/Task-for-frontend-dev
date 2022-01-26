const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = app => {
    app.use(
        createProxyMiddleware('2018/04/30/',{
            target : 'www.metaweather.com/api/location/44418/',
            changeOrigin: true
        })
    )
}