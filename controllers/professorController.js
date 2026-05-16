const { Professor } = require('../models');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try {
        const professor = await Professor.create(req.body);
        res.status(201).json({ message: 'Professor registered', id: professor.ProfessorID });
    } catch (err) { res.status(400).json({ error: err.message }); }
};

exports.getAll = async (req, res) => {
    try {
        const professors = await Professor.findAll();
        res.json(professors);
    } catch (err) { res.status(500).json({ error: err.message }); }
};
