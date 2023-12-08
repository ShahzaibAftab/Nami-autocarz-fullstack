// routes/api/Profile.js

const express = require('express');
const router = express.Router();
const profileController = require('../../controller/profileController');

// API routes for profiles
router.post('/create', profileController.createProfile);
router.get('/fetch/:id', profileController.getProfileById);
router.put('/update/:id', profileController.updateProfile);
router.delete('/delete/:id', profileController.deleteProfile);

module.exports = router;
