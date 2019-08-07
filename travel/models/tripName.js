module.exports = function (sequelize, DataTypes) {
  var TripName = sequelize.define('TripName', {
    tripName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  TripName.associate = function (models) {
    TripName.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
    TripName.hasMany(models.Flight, {
      onDelete: 'cascade'
    });
    TripName.hasMany(models.Lodging, {
      onDelete: 'cascade'
    });
    TripName.hasMany(models.Transport, {
      onDelete: 'cascade'
    });
  };
  return TripName;
};
