import express from 'express'
import bodyParser from 'body-parser'

require('./bootstrap')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const plans = require('./routes/plans')
const appointments = require('./routes/appointments')

app.use('/plans', plans)
app.use('/appointments', appointments)

const port = 4000

app.listen(port, function () {
  console.log('App running on address: http://localhost:' + port)
})