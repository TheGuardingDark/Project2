
module.exports = function (sequelize, DataTypes) {
  var Flight = sequelize.define('Flight', {
    airline: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    flightConNum: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateStartFly: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    },
    dateEndFly: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    },
    flightTime: {
      type: DataTypes.TIME
    },
    cancelledFly: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    flightNotes: {
      type: DataTypes.TEXT
    }
  });

  Flight.associate = function (models) {
    Flight.belongsTo(models.TripName, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Flight;
};
