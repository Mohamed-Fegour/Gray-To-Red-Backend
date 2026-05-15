const { Student } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json({ message: 'Student registered successfully', studentId: student.StudentID });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const student = await Student.findOne({ where: { Email: req.body.Email } });
        if (!student || !(await bcrypt.compare(req.body.Password, student.Password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: student.StudentID, role: 'student' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
