var data =require('./data/templates.json')

const express = require('express')
const router = express.Router()
const app = express();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
//default route
router.get('/', (req, res) => {
  res.send('Cannot find the right path')
})
// define the list route
router.get('/list', (req, res) => {
  if (data.length>0)
  {
  res.send(data)
  }
  else{
    res.send('No records founds')
  }
})

module.exports = router