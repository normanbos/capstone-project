export function sendReminderMail() {
  const nodemailer = require('nodemailer')

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    let transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '2dcd82b46f20b2',
        pass: '71777e5b8854c6',
      },
    })

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Norman Bos" <normanbos80@gmail.com>', // sender address
      to: 'norman.bos@gmx.de', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    })

    console.log('Message sent: %s', info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }

  main().catch(console.error)
}
