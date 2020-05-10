const express = require('express')
const router = express.Router()
const Device = require('../models/device')
// import { index, show, create } from ('../controllers/devices')

router.get('/', (req, res) => {
  Device.findAll()
    .then(devices => res.status(200).json(devices))
    .catch(err => res.status(400).send(err))
})

router.post('/', (req, res) => {
  let { name, description, type, value, warm} = req.body
  let newDevice = {
    name,
    description,
    type,
    value, 
    warm
  }
  Device.create(newDevice)
    .then(res.json(newDevice))
    .catch(err => res.status(400).send(err))
})

router.get('/:id', (req, res) => {
  Device.findByPk(req.params.id)
    .then(device => res.json(device))
    .catch(err => res.status(400).send(err))
})

router.put('/:id', (req, res) => {
  let { name, description, type, value, warm} = req.body
  let updatedDevice = {
    name,
    description,
    type,
    value, 
    warm
  }
  Device.update(updatedDevice, {
    where: { id: req.params.id }
  })
    .then(() => res.redirect(`/devices/${req.params.id}`))
    .catch(err => res.status(400).send(err))
})

router.delete('/:id', (req, res) => {
  Device.destroy({
    where: { id: req.params.id }
  })
    .then(() => res.status(200).redirect('/devices'))
    .catch(err => res.status(400).send(er))
})

module.exports = router