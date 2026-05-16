const { ProblemSet } = require('../models');

exports.create = async (req, res) => {
    try {
        const ps = await ProblemSet.create(req.body);
        res.status(201).json(ps);
    } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.getAll = async (req, res) => {
    try {
        const ps = await ProblemSet.findAll();
        res.json(ps);
    } catch (err) { res.status(500).json({ error: err.message }); }
};
