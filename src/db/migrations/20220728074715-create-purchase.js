module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Purchases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      medic_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Medicines',
          },
          key: 'id',
        },
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Orders',
          },
          key: 'id',
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Purchases');
  },
};
