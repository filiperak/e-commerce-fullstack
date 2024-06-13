const express = require('express');
const router = express.Router();
const {getAllUsers,createUser, getUserById ,getUserByLogin} = require('../controllers/user');

router.get('/',getAllUsers);

router.post('/',createUser)

router.get('/:id',getUserById)

router.post('/login',getUserByLogin)

module.exports = router;