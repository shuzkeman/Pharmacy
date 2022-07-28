'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo( models.Medicines, { foreignKey: 'medic_id' });
      this.belongsTo( models.Order, { foreignKey:'order_id' });
    }
  }
  Purchase.init({
    medic_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Purchase',
  });
  return Purchase;
};