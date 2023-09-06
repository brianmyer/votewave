const sequelize = require('../config/connection');
const { User, Poll, Question, Response } = require('../models');

const userData = require('./userData.json');
const pollData = require('./pollData.json');
const questionData = require('./questionData.json')
const responseData = require('./responseData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const poll = await Poll.bulkCreate(pollData, {
    individualHooks: true,
    returning: true,
  });

  const question = await Question.bulkCreate(questionData, {
    individualHooks: true,
    returning: true,
  });


  const response = await Response.bulkCreate(responseData, {
    individualHooks: true,
    returning: true,
  });



  process.exit(0);
};

seedDatabase();
