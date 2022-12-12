const express = require('express')
const app = express()

app.get('/', () => {
  console.log('They are at our server!')
})

app.get('/testpath', () => {
  console.log('The test path has worked!')
})

app.listen(80)
