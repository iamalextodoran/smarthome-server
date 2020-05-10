const express = require('express')
const router = express.Router()
const { getDevices, postDevice, getDevice, updateDevice, deleteDevice, getLights, getBlinds, getWindows, getTemperatures } = require('../controllers/devices');

router.get('/', getDevices)
router.get('/lights', getLights)
router.get('/blinds', getBlinds)
router.get('/windows', getWindows)
router.get('/temperatures', getTemperatures)
router.post('/', postDevice)
router.get('/:id', getDevice)
router.put('/:id', updateDevice)
router.delete('/:id', deleteDevice)

module.exports = router