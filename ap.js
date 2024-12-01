const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/recomendation",
    createProxyMiddleware({
      target: "http://127.0.0.1:8010", // URL вашего сервера
      changeOrigin: true,
    })
  );
};
