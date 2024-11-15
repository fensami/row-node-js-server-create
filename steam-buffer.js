const http = require("http");

// creating a server using raw node.js
const server = http.createServer();

// Listener
server.on("request", (req, res) => {
  console.log(req.url, req.method);
  res.end("hello from world , Server is running 5000 port");
});


server.listen(5000, () => {
  console.log(`server is rungin on port 5000`);
});
