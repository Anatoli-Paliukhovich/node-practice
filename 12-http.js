const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to the home page");
    res.end();
  }
  if (req.url === "/about") {
    res.write("About page is working");
    res.end();
  }
  res.write(`<h1>There is no such page</h1><a href="/">Back to home</a>`);
  res.end();
});

server.listen(5500);
