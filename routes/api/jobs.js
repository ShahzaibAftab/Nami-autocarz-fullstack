const express = require('express');
const router = express.Router({ mergeParams: true });
const jobsController = require('../../controller/jobsController');

router.get('/fetch', jobsController.fetch);
router.post('/create', jobsController.create);
router.delete('/delete/:id', jobsController.delete);
router.post('/update:id', jobsController.update);

module.exports = router;
