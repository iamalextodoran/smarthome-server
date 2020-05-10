const express = require('express')
const router = express.Router()
const Room = require('../models/room')
// import { index, show, create } from ('../controllers/rooms')

router.get('/', (req, res) => {
  Room.findAll()
    .then(rooms => res.status(200).json(rooms))
    .catch(err => res.status(400).send(err))
})

router.post('/', (req, res) => {
  let { name, description, image } = req.body
  let newRoom = {
    name,
    description,
    image
  }
  Room.create(newRoom)
    .then(res.json(newRoom))
    .catch(err => res.status(400).send(err))
})

router.get('/:id', (req, res) => {
  Room.findByPk(req.params.id)
    .then(room => res.json(room))
    .catch(err => res.status(400).send(err))
})

router.put('/:id', (req, res) => {
  let { name, description, image } = req.body
  let updatedRoom = {
    name,
    description,
    image
  }
  Room.update(updatedRoom, {
    where: { id: req.params.id }
  })
    .then(() => res.redirect(`/rooms/${req.params.id}`))
    .catch(err => res.status(400).send(err))
})

router.delete('/:id', (req, res) => {
  Room.destroy({
    where: { id: req.params.id }
  })
    .then(() => res.status(200).redirect('/rooms'))
    .catch(err => res.status(400).send(er))
})

module.exports = router