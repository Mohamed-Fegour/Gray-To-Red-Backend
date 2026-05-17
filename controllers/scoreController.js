const { Score, Leaderboard, CompletedProblemSets } = require('../models');

exports.create = async (req, res) => {
    try {
        const score = await Score.create(req.body);
        
        // Fetch the associated completion to get StudentID and ProblemSetID
        const completion = await CompletedProblemSets.findByPk(req.body.CompletionID);
        if (!completion) {
            throw new Error('Completed problem set not found');
        }

        // Auto-update/create leaderboard entry
        const [leaderboard, created] = await Leaderboard.findOrCreate({
            where: { StudentID: completion.StudentID, ProblemSetID: completion.ProblemSetID },
            defaults: { TotalScore: req.body.ScoreValue, StudentRank: 1 }
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

