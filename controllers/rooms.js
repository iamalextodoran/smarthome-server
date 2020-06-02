const { User, Room, Device } = require('../models')


exports.getRooms = (req, res) => {
  Room.findAll({ include: Device })
    .then(rooms => res.status(200).json(rooms))
    .catch(err => res.status(400).send(err))
}

exports.postRoom = (req, res) => {
  let { name, description, image, temperature, UserId } = req.body
  let newRoom = {
    name,
    description,
    image,
    temperature,
    UserId
  }
  Room.create(newRoom)
    .then(res.json(newRoom))
    .catch(err => res.status(400).send(err))
}

exports.getRoom = (req, res) => {
  Room.findByPk(req.params.id, { include: Device })
    .then(room => res.json(room))
    .catch(err => res.status(400).send(err))
}

exports.updateRoom = (req, res) => {
  let { name, description, image, temperature, UserId } = req.body
  let updatedRoom = {
    name,
    description,
    image,
    temperature,
    UserId
  }
  Room.update(updatedRoom, {
    where: { id: req.params.id }
  })
    .then(() => res.redirect(`/rooms/${req.params.id}`))
    .catch(err => res.status(400).send(err))
}

exports.deleteRoom = (req, res) => {
  Room.destroy({
    where: { id: req.params.id }
  })
    .then(() => res.status(200).redirect('/rooms'))
    .catch(err => res.status(400).send(er))
}
