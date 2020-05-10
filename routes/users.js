const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', (req, res) => {
  User.findAll({ order: [['id', 'ASC']] })
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).send(err))
})

router.post('/', (req, res) => {
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
})

router.get('/:id', (req, res) => {
  User.findByPk(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).send(err))
})

router.put('/:id', (req, res) => {
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
})

router.delete('/:id', (req, res) => {
  User.destroy({
    where: { id: req.params.id }
  })
    .then(() => res.status(200).redirect('/users'))
    .catch(err => res.status(400).send(err))
})

module.exports = router