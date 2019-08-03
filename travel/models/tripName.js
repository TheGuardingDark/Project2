module.exports = function (sequelize, DataTypes) {
  var tripName = sequelize.define('TripName', {
    tripName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  tripName.associate = function (models) {
    tripName.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return tripName;
};
