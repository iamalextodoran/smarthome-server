const Device = require('../models/device')

exports.getDevices = (req, res) => {
  Device.findAll()
    .then(devices => res.status(200).json(devices))
    .catch(err => res.status(400).send(err))
}

exports.getLights = (req, res) => {
  Device.findAll({where: {
    type: 'Light'
  }})
    .then(devices => res.status(200).json(devices))
    .catch(err => res.status(400).send(err))
}
exports.getBlinds = (req, res) => {
  Device.findAll({where: {
    type: 'Blind'
  }})
    .then(devices => res.status(200).json(devices))
    .catch(err => res.status(400).send(err))
}
exports.getWindows = (req, res) => {
  Device.findAll({where: {
    type: 'Window'
  }})
    .then(devices => res.status(200).json(devices))
    .catch(err => res.status(400).send(err))
}
exports.getTemperatures = (req, res) => {
  Device.findAll({where: {
    type: 'Temperature'
  }})
    .then(devices => res.status(200).json(devices))
    .catch(err => res.status(400).send(err))
}

exports.postDevice = (req, res) => {
  let { name, description, type, value, warm } = req.body
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
}

exports.getDevice = (req, res) => {
  Device.findByPk(req.params.id)
    .then(device => res.json(device))
    .catch(err => res.status(400).send(err))
}

exports.updateDevice = (req, res) => {
  let { name, description, type, value, warm } = req.body
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
}

exports.deleteDevice = (req, res) => {
  Device.destroy({
    where: { id: req.params.id }
  })
    .then(() => res.status(200).redirect('/devices'))
    .catch(err => res.status(400).send(er))
}