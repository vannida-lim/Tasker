const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vannida.lim@gmail.com',
        subject: 'Thanks for Joining!',
        text: `Welcome to Tasker, ${name}. Let me know how things go with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'vannida.lim@gmail.com',
        subject: `We're sad to see you go!`,
        text: `Goodbye ${name}, thanks for trying out Tasker. If you want to come back, Tasker is just a click away!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}