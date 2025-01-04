const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to our home page");
    res.end();
  }
  if (req.url === "/about") {
    res.write("here is our short history");
    res.end();
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>we cannot seem to find the page you are looking for</p>
      <a href="/">back home</a>
    `);
  }
});

server.listen(3000);
