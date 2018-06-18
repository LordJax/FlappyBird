
const http = require('http')
const fs = require('fs')


const app = http.createServer((req, res) => {
       fs.readFile('./index.html', (err, file) => {
       res.setHeader(200, { 'Content-Type': 'text/html' })
       res.write(file)
       res.end()
  })
}

app.listen(3000, () => console.log('Listing on port 3000')) 
