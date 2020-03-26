const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const nodemailer = require('nodemailer')
const cors = require('cors')
const { PORT = 4000 } = process.env

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', function(req, res) {
  return res.send('pong')
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => console.log(`Server ready on http://localhost:${PORT}`))

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/v1', (req, res) => {
  var data = req.body

  var smtpTransport = nodemailer.createTransport({
    host: data.host,
    port: data.port,
    auth: {
      user: data.user,
      pass: data.pass,
    },
  })

  var mailOptions = {
    from: 'norman.bos@gmx.de',
    to: data.email,
    subject: 'Reminder',
    html: data.message,
  }

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error)
    } else {
      res.send('Success')
    }
    smtpTransport.close()
  })
})
