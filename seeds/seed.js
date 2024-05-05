const sequelize = require('../config/connection');
const { User, Post,Comment } = require('../models');

const userData = require('./users_seeds');
const postData = require('./posts_seeds');
const commentData= require('./comments_seeds');


const seedAll = async() => {
    await sequelize.sync({ force: true });
    await userData();
    await postData();
    await commentData();
    process.exit(0);
};

seedAll();