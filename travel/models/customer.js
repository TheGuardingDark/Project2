module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    // grabbing this from the user login req.user.user_id unique to each user
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    // grabbing this either from re.user.emails.value or if they input a new one
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  });

  //   Sets up foreign keys on customerid with other models and deletes if customer is deleted
  Customer.associate = function (models) {
    Customer.hasMany(models.TripName, {
      onDelete: 'cascade'
    });
  };
  return Customer;
};
