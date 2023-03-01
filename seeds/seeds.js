const sequelize = require('../config/connection');
const seedPost = require('./goalsData');   // const seedGoal
const seedComment = require('./commentData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedGoal();

  await seedComment();

  process.exit(0);
};

seedAll();
