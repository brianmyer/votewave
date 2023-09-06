const Question = require('./Question');
const User = require('./User');
const Poll = require('./Poll');
const Response = require('./Response')

User.hasMany(Poll, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Poll.belongsTo(User, {
  foreignKey: 'user_id'
});

Poll.hasMany(Question, {
  foreignKey: 'poll_id',
  onDelete: 'CASCADE'
})

Question.belongsTo(Poll, {
  foreignKey: 'poll_id'
})

Question.hasMany(Response, {
  foreignKey: 'question_id',
  onDelete: 'CASCADE'
})

Response.belongsTo(Question, {
  foreignKey: 'question_id'
})

module.exports = { User, Poll, Response, Question};
