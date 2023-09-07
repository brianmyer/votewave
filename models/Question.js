const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Question extends Model {}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    response1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      response2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      response3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      response4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      response5: {
        type: DataTypes.STRING,
        allowNull: true
      },
      poll_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'poll',
            key: 'id'
        }
      }
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'question',
  }
);

module.exports = Question;
