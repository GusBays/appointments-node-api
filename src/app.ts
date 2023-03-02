import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./bootstrap');

const plans = require('./routes/plans')
const appointments = require('./routes/appointments')

app.use('/plans', plans)
app.use('/appointments', appointments)

const port = 4000

app.listen(port, () => {
  console.log('App running on address: http://localhost:' + port)
})