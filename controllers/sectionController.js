const { Section } = require('../models');

exports.create = async (req, res) => {
    try {
        const section = await Section.create(req.body);
        res.status(201).json(section);
    } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.getAll = async (req, res) => {
    try {
        const sections = await Section.findAll();
        res.json(sections);
    } catch (err) { res.status(500).json({ error: err.message }); }
};
