const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../view/login.html'));
});
module.exports = router;