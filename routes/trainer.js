const express = require('express');
const router = express.Router();
const trainerController = require('../controller/trainer');

router.get('/trainer', (req, res) => {
    res.render('trainerIndex')
});

router.get('/trainer/trainerEdit', (req, res) => {
    res.render('trainerProfileUpdate')
});

router.get('/trainer/viewTrainee', (req, res) => {
    res.render('trainerViewTrainee')
});

router.get('/trainer/viewCourse', (req, res) => {
    res.render('trainerViewCourse')
});

module.exports = router;