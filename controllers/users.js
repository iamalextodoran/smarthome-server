const { User, Room, Device } = require('../models')


exports.getUsers = (req, res) => {
  User.findAll({ include: Room })
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).send(err))
}

exports.postUser = (req, res) => {
  let { name, email, temperature, temperatureMode, city, image } = req.body
  let newUser = {
    name,
    email,
    temperature,
    temperatureMode,
    city,
    image
  }
  User.create(newUser)
    .then(res.json(newUser))
    .catch(err => res.status(400).send(err))
}

exports.getUser = (req, res) => {
  User.findByPk(req.params.id, { include: Room })
    .then(user => res.json(user))
    .catch(err => res.status(400).send(err))
}

exports.updateUser = (req, res) => {
  let { name, email, temperature, temperatureMode, city, image } = req.body
  let updatedUser = {
    name,
    email,
    temperature,
    temperatureMode,
    city,
    image
  }
  User.update(updatedUser, {
    where: { id: req.params.id }
  })
    .then(() => res.redirect(`/users/${req.params.id}`))
    .catch(err => res.status(400).send(err))
}

exports.deleteUser = (req, res) => {
  User.destroy({
    where: { id: req.params.id }
  })
    .then(() => res.status(200).redirect('/users'))
    .catch(err => res.status(400).send(err))
}