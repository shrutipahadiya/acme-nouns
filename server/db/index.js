const chalk = require('chalk');
const { db } = require('./db');
const { Person, Place,Thing } = require('./models');

// Pokemon.belongsTo(Trainer);
// Trainer.hasMany(Pokemon);


Place.hasMany(Person);
Person.belongsTo(Place);
Person.hasMany(Thing);
Thing.belongsTo(Person);


const seed = async (force = false) => {
  try {
    await db.sync({ force });

    console.log(chalk.green(`DB successfully connected, and synced. Force: ${force}`));
  } catch (e) {
    console.log(chalk.red('Error while connecting to database.'));

    throw e;
  }
};

module.exports = {
  db,
  seed,
  Person,
  Place,
  Thing
};