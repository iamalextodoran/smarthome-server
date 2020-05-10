const express = require('express')
const router = express.Router()
const { getRooms, postRoom, getRoom, updateRoom, deleteRoom } = require('../controllers/rooms');

router.get('/', getRooms)
router.post('/', postRoom)
router.get('/:id', getRoom)
router.put('/:id', updateRoom)
router.delete('/:id', deleteRoom)

module.exports = router