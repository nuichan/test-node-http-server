// index.js
const http = require('http');
  const server = http.createServer((req, res) => {
    if (req.url === '/healthcheck') {
      res.writeHead(201, { 'Content-Type': 'text/plain' });
      res.end('OK\n');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
  });
  server.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
  });
