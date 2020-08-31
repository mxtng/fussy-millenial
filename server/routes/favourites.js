const express = require('express');
const router = express.Router();

router.get('/', (req,res) => res.send('Favourites Route'));

module.exports = router;