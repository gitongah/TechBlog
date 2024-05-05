const {User}= require('../models');

const userData = [
  {
    name:"the first dammy comment",
    email:"test@gmail.com",
    password:"qwerty"
  },
 {
    name:"the first dammy comment",
    email:"tet@gmail.com",
    password:"qwerty"
  },
   {
    name:"the first dammy comment",
    email:"tst@gmail.com",
    password:"qwerty"
  },
   {
    name:"the first dammy comment",
    email:"tes@gmail.com",
    password:"qwerty"
  },
]

const seedUser = () =>User.bulkCreate(userData);

module.exports = seedUser;