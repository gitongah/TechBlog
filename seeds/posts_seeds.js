const {Post}= require('../models');

const postData = [
  {
    title:"New tech Blog",
    content:" my first tech blog",
    user_id:1
  },
    {
    title:"New tech Blog",
    content:" my first tech blog",
    user_id:2
  },
    {
    title:"New tech Blog",
    content:" my first tech blog",
    user_id:3
  }
]
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;

