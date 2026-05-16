const { Score, Leaderboard } = require('../models');

exports.create = async (req, res) => {
    try {
        const score = await Score.create(req.body);
        
        // Auto-update/create leaderboard entry
        const [leaderboard, created] = await Leaderboard.findOrCreate({
            where: { StudentID: req.body.StudentID, ProblemSetID: req.body.ProblemSetID },
            defaults: { TotalScore: req.body.ScoreValue, Rank: 1 }
        });
        
        if (!created) {
            // Update score if new one is higher
            if (req.body.ScoreValue > leaderboard.TotalScore) {
                await leaderboard.update({ TotalScore: req.body.ScoreValue });
            }
        }
        
        res.status(201).json(score);
    } catch (err) { res.status(400).json({ error: err.message }); }
};

