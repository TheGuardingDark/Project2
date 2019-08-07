
module.exports = function (sequelize, DataTypes) {
  var Transport = sequelize.define('Transport', {
    dealer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    carConNum: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateStartTran: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    },
    dateEndTran: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    },
    tranTime: {
      type: DataTypes.TIME
    },
    cancelledTran: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    transportNotes: {
      type: DataTypes.TEXT
    }
  });
  Transport.associate = function (models) {
    Transport.belongsTo(models.TripName, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Transport;
};
