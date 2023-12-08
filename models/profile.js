const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  bio: {
    type: String,
  },
  academicHistory: {
    type: Object,
    default: {},
  },
  employmentHistory: {
    type: Object,
    default: {},
  },
  skills: {
    type: Object,
    default: {},
  },
});

profileSchema.index({ user: 1 }, { unique: true });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;