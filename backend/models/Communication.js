const mongoose = require('mongoose');

const CommunicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  to: { type: String, required: true },
  subject: { type: String, required: true },
  htmlBody: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Communication', CommunicationSchema);
