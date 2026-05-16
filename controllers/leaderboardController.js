const { Leaderboard } = require('../models');

exports.getAll = async (req, res) => {
    try {
        const lb = await Leaderboard.findAll({ order: [['Rank', 'ASC']] });
        res.json(lb);
    } catch (err) { res.status(500).json({ error: err.message }); }
};
