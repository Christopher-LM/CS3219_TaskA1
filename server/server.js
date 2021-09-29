const http = require('http')
const fs = require('fs')

// serve the html file
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('/var/www/index.html').pipe(res)
})

// listen on port 8080
server.listen(8080)