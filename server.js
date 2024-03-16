const http = require('http')
const port = 3000
const ip = 'localhost'

const server = http.createServer((req, res) => {
if (req.url == "/") {
   res.end('<h1>Home</h1>')
}
if (req.url == '/about') {
res.end('<h1>Page About Us</h1>')
}
if (req.url == '/contact') {
res.end('<h1>Page Contact</h1>')
}
})

server.listen(port, ip, () => {
console.log(`Server: http://${ip}:${port}`)
})
