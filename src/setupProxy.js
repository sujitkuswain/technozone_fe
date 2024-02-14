const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://tz-bff:8080', // Spring Boot server URL
      changeOrigin: true,
    })
  );
};