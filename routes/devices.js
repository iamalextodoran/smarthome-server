const express = require('express')
const router = express.Router()
const { getDevices, postDevice, getDevice, updateDevice, deleteDevice } = require('../controllers/devices');

router.get('/', getDevices)
router.post('/', postDevice)
router.get('/:id', getDevice)
router.put('/:id', updateDevice)
router.delete('/:id', deleteDevice)

module.exports = router