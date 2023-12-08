const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scholarShipSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  totalAvailable: {
    type: Number,
    default: 100,
  },
  country: {
    type: String,
    required: true,
  },
  educationType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ScholarShip', scholarShipSchema);
