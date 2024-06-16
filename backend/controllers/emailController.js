const postmark = require('postmark');
const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN);
const Communication = require('../models/Communication');  // Add a model for storing communication history

// Send email function
const sendEmail = async (req, res) => {
  try {
    const { to, subject, htmlBody } = req.body;
    const response = await client.sendEmail({
      From: process.env.EMAIL_FROM,
      To: to,
      Subject: subject,
      HtmlBody: htmlBody,
    });
    
    // Save to communication history
    const communication = new Communication({
      userId: req.user.id,
      to,
      subject,
      htmlBody,
      date: new Date(),
    });
    await communication.save();

    res.json({ message: 'Email sent successfully', response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get communication history function
const getCommunicationHistory = async (req, res) => {
  try {
    const history = await Communication.find({ userId: req.user.id });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  sendEmail,
  getCommunicationHistory,
};
