const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/*', (req, res) => {
    res.send(`<h1>404</h1><h2>No Found</h2><p>No se pudo encontrar la ruta para ${req.url}</p>`);
});

module.exports = router;