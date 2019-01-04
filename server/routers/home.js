const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/index.html'));
});

module.exports = router;