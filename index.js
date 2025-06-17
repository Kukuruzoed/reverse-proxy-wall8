const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Настроить прокси
app.use('/', createProxyMiddleware({
  target: 'https://alexbaker.8thwall.app/vpsmap/',
  changeOrigin: true,
  secure: true,
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('Origin', 'https://alexbaker.8thwall.app');
    proxyReq.setHeader('Referer', 'https://alexbaker.8thwall.app');
  }
}));

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
