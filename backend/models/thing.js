const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  name: { type: String, required: true },
  first_name: { type: String, required: true },
  birth_date: { type: String, required: true },
  nbr_badge: { type: String, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);