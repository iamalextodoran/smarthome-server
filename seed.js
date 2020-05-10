var faker = require('faker');

const User = require('./models/user')
const Room = require('./models/room')
const Device = require('./models/device')

var temperatureModes = ['Eco', 'Day', 'Night'];
User.create({
  name: faker.name.findName(),
  email: faker.internet.email(),
  temperature: parseInt(Math.floor(Math.random() * 30)),
  temperatureMode: temperatureModes[Math.floor(Math.random() * temperatureModes.length)],
  city: faker.address.city(),
  image: faker.image.avatar()
})

Room.create({
  name: faker.name.findName(),
  description: faker.lorem.paragraph(),
  image: faker.image.city()
})

var deviceTypes = ['Light', 'Blind', 'Temperature', 'Window'];
Device.create({
  name: faker.name.findName(),
  type: deviceTypes[Math.floor(Math.random() * deviceTypes.length)],
  description: faker.lorem.paragraph(),
  value: parseInt(Math.floor(Math.random() * 30)),
  warm: parseInt(Math.floor(Math.random() * 30))
})
