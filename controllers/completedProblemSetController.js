const { CompletedProblemSets } = require('../models');

exports.submit = async (req, res) => {
    try {
        const cps = await CompletedProblemSets.create(req.body);
        res.status(201).json(cps);
    } catch (err) { res.status(400).json({ error: err.message }); }
};
