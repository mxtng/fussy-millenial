const express = require('express');
const router = express.Router();

router.get('/', (req,res) => res.send('Recipes Route'));

module.exports = router;