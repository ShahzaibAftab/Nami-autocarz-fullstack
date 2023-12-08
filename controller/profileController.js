const Profile = require('../models/profile'); 
                 
const profileController = {
  // Get user profile by ID
  getProfileById: async (req, res) => {
    const userId = req.params.id; 
    try {
      const userProfile = await Profile.findOne({ user: userId }).populate('user');
      if (!userProfile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      res.json(userProfile);
    } catch (error) {
      console.error('Error fetching profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProfile: async (req, res) => {
    const profileData = req.body;
    try {
      const newProfile = await Profile.create(profileData);
      res.send(newProfile);
    } catch (error) {
      console.error('Error creating profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteProfile: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProfile = await Profile.findByIdAndDelete(id);
      res.send(deletedProfile);
    } catch (error) {
      console.error('Error deleting profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Update user profile
  updateProfile: async (req, res) => {
    const userId = req.params.id; 
    const profileData = req.body; 
    try {
      const updatedProfile = await Profile.findOneAndUpdate({ user: userId }, profileData, {
        new: true,
        upsert: true,
      }).populate('user');
      res.json(updatedProfile);
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = profileController;
