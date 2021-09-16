const express = require('express')
const app = express()

function setup() {
  app.get('/api/get', (req, res) => {
    res.send('hi')
  })
  
  return new Promise((resolve) => {
    app.listen(9999, () => {
      resolve && resolve()
    })
  })
}

module.exports = setup