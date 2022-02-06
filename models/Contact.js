const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, 'Please enter an email'],
    },
    name: {
      type: String,
      required: [true, 'Please enter an email'],
    },
    message: {
      type: String,
      required: [true, 'Please enter an email'],
    },
  });
  

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;