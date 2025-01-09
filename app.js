const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("hello world");
});

server.listen(3001, () => {
  console.log("server listening on port 3001...");
});
