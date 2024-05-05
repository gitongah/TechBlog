const {Comment}= require('../models');

const commentData = [
  {
    comment:"the first dammy comment",
    user_id:1,
    post_id:1
  },
    {
    comment:"the first dammy comment",
    user_id:2,
    post_id:2
  },  {
    comment:"the first dammy comment",
    user_id:3,
    post_id:3
  }
]

const seedComment = () =>Comment.bulkCreate(commentData);

module.exports = seedComment;