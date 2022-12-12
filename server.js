const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('They are at our server!')
  res.send('Hello')
})

app.get('/testpath', () => {
  console.log('The test path has worked!')
})

app.listen(3305)
