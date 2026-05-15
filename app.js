require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);

// Sync database and start server
sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(3000, () => console.log('Server running on port 3000'));
});
