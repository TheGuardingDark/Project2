
module.exports = function (sequelize, DataTypes) {
  var Lodging = sequelize.define('Lodging', {
    lodgingName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lodgingConNum: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateStartLodg: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    },
    dateEndLodg: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    },
    cancelledLodg: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    lodgingNotes: {
      type: DataTypes.TEXT
    }
  });
  Lodging.associate = function (models) {
    Lodging.belongsTo(models.TripName, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Lodging;
};
