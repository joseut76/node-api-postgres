
const express = require('express');
const router = express.Router();
const db = require('../queries');

router.get('/', function(req, res) {
  
});

router.get('/:id', db.getGradesByStudentId);

router.post('/', db.postGradeByStudentId);

module.exports = router;