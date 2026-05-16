require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const studentRoutes = require('./routes/studentRoutes');
const professorRoutes = require('./routes/professorRoutes');
const sectionRoutes = require('./routes/sectionRoutes');
const problemSetRoutes = require('./routes/problemSetRoutes');
const completedProblemSetRoutes = require('./routes/completedProblemSetRoutes');
const scoreRoutes = require('./routes/scoreRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

const app = express();

app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/professors', professorRoutes);
app.use('/api/sections', sectionRoutes);
app.use('/api/problemsets', problemSetRoutes);
app.use('/api/submissions', completedProblemSetRoutes);
app.use('/api/scores', scoreRoutes);
app.use('/api/leaderboard', leaderboardRoutes);


// Sync database and start server
sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(3000, () => console.log('Server running on port 3000'));
});
