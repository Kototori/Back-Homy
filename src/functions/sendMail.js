const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.SENHA
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = async (to, key, name) => {
    const mailOptions = {
        from: process.env.SENHA,
        to: to,
        subject: 'Chave de confirmação do Aplicativo Hommy',
        text: 'Olá, '+ name +' a chave de confirmação de e-mail para o aplicativo Hommy é: ' + key,
    };

    await transporter.sendMail(mailOptions)
}
