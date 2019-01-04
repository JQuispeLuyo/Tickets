const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/escritorio', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/escritorio.html'));
    // res.render('');
});

module.exports = router;