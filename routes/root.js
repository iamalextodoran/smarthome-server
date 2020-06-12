const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { User, Room, Device } = require("../models");

getUser = (req, res) => {
  User.findByPk(req.params.UserId, {
    include: [{ model: Room }],
  })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).send(err));
};

getUserRooms = (req, res) => {
  Room.findAll({
    where: {
      UserId: req.params.UserId,
    },
    include: Device,
  })
    .then((rooms) => res.status(200).json(rooms))
    .catch((err) => res.status(400).send(err));
};

getRoom = (req, res) => {
  Room.findAll({
    where: {
      id: req.params.RoomId,
    },
    include: Device,
  })
    .then((rooms) => res.status(200).json(rooms))
    .catch((err) => res.status(400).send(err));
};

getUserDevices = (req, res) => {
  Device.findAll({
    where: {
      UserId: req.params.UserId,
    }
  })
    .then((rooms) => res.status(200).json(rooms))
    .catch((err) => res.status(400).send(err));
};

router.get("/:UserId", getUser);
router.get("/:UserId/rooms", getUserRooms);
router.get("/:UserId/rooms/:RoomId", getRoom);
router.get("/:UserId/devices", getUserDevices);

module.exports = router;
