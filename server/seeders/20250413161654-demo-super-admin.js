'use strict';
const bcrypt = require('bcryptjs'); 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('123456', 10);

    await queryInterface.bulkInsert('Users', [
      {
        username: 'superadmin',
        password: hashedPassword,
        role: 'super-admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Optionally remove the super admin when rolling back the seeder
    await queryInterface.bulkDelete('Users', {
      username: 'superadmin',
    });
  },
};
