const express = require('express');
const router = express.Router();
const {getAllUsers,createUser, getUserById} = require('../controllers/user')

router.get('/',getAllUsers);

router.post('/',createUser)

router.get('/:id',getUserById)

module.exports = router;