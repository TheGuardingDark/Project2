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
  };
  return TripName;
};
