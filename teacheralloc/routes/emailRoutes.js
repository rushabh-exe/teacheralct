const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');

// Route to send email
router.post('/send', async (req, res) => {
    const { to, subject, text } = req.body;
    try {
        const info = await emailService.sendEmail(to, subject, text);
        res.status(200).json({ message: 'Email sent successfully.', info: info });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
