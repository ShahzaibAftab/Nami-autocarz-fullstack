const express = require('express');
const router = express.Router({ mergeParams: true });
const scholashipController = require('../../controller/scholarshipController');

router.get('/fetch', scholashipController.fetch);
router.post('/create', scholashipController.create);
router.delete('/delete/:id', scholashipController.delete);
router.post('/update/:id', scholashipController.update);

module.exports = router;
