const http = require("http");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("This is a web server version 3.0 -- BUG DETECTED! \n");
});

server.listen(port, hostname, () => {
  console.log(`Server running`);
});

//Build image
//docker build -t hendrosteven/app-web:1.0 .
//docker build -t hendrosteven/app-web:2.0 .
//docker build -t hendrosteven/app-web:3.0 .

//Push image
//docker push hendrosteven/app-web:latest

// kubectl exec -it <podname> -- /bin/sh
