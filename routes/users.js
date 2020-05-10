const express = require('express')
const router = express.Router()
const { getUsers, postUser, getUser, updateUser, deleteUser } = require('../controllers/users');

router.get('/', getUsers)
router.post('/', postUser)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router