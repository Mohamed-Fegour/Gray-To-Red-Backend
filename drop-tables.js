const sequelize = require('./config/database');

async function dropTables() {
    try {
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0;');
        await sequelize.query('DROP TABLE IF EXISTS \Students\;');
        await sequelize.query('DROP TABLE IF EXISTS \Professors\;');
        await sequelize.query('DROP TABLE IF EXISTS \Sections\;');
        await sequelize.query('DROP TABLE IF EXISTS \ProblemSets\;');
        await sequelize.query('DROP TABLE IF EXISTS \Scores\;');
        await sequelize.query('DROP TABLE IF EXISTS \Leaderboards\;');
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 1;');
        console.log('Pluralized tables dropped successfully.');
        process.exit(0);
    } catch (err) {
        console.error('Error dropping tables:', err);
        process.exit(1);
    }
}
dropTables();
