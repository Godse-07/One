// This is a demo Node.js connextion code example for beginners

const http = require('http'); // Import the http module

const hostname = '127.0.0.1';
const port = 3000;

// Create a server instance that handles requests and responses
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the response status code to OK
  res.setHeader('Content-Type', 'text/plain'); // Set the response header
  res.end('Hello World\n'); // End the response and send the content
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

