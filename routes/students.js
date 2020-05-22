const express = require('express');
const router = express.Router();
const db = require('../queries');

router.get('/',  db.getStudents);
router.get('/:id', db.getStudentById)
module.exports = router;