
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1>DevOps Labs</h1>
    <h2>Version 1 - Green</h2>
    <p>Deployed using GitHub and AWS CodePipeline!</p>
  `);
});

server.listen(process.env.PORT || 8080);
