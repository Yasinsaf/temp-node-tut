const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "about") {
    res.end("sjdsjn");
  }
});

server.listen(3000);
