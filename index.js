var http = require('http');

function* argumentsGenerator() {
  for (let i = 0; i < arguments.length; i += 1) {
    yield arguments[i];
  }
}

var argumentsIterator = argumentsGenerator('alpha', 'beta', 'gamma');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(
    [
      "Hello, harmonious world.",
      argumentsIterator.next().value,
      argumentsIterator.next().value,
      argumentsIterator.next().value
    ].join(" ")
  )
}).listen((process.env.PORT || 5000));