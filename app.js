// Import the built-in 'http' module
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js!");
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000 aa");
});
