const User = require('./User');
const Poll = require('./User');

User.hasMany(Poll, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Poll.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Poll };
