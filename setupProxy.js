const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/test", {
      target: "http://localhost:5000",
      changeOrigin: true,
      ws: true,
    })
  );
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:4000/",
      changeOrigin: true,
    })
  );
};
