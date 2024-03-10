const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
    try {
        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: 'testdlp18@outlook.com',
                pass: 'Testing@somaiya34'
            }
        });

        // Define email options
        const mailOptions = {
            from: 'testdlp18@outlook.com',
            to: to,
            subject: subject,
            text: text
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

module.exports = { sendEmail };
