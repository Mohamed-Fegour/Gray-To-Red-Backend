const Professor = require('./Professor');
const Section = require('./Section');
const Student = require('./Student');
const ProblemSet = require('./ProblemSet');
const SectionProblemSet = require('./SectionProblemSet');
const CompletedProblemSets = require('./CompletedProblemSets');
const Score = require('./Score');
const Leaderboard = require('./Leaderboard');

// Associations
Professor.hasMany(Section, { foreignKey: 'ProfessorID' });
Section.belongsTo(Professor, { foreignKey: 'ProfessorID' });

Professor.hasMany(ProblemSet, { foreignKey: 'ProfessorID' });
ProblemSet.belongsTo(Professor, { foreignKey: 'ProfessorID' });

Section.hasMany(Student, { foreignKey: 'SectionCode' });
Student.belongsTo(Section, { foreignKey: 'SectionCode' });

Section.belongsToMany(ProblemSet, { through: SectionProblemSet, foreignKey: 'SectionCode' });
ProblemSet.belongsToMany(Section, { through: SectionProblemSet, foreignKey: 'ProblemSetID' });

Student.hasMany(CompletedProblemSets, { foreignKey: 'StudentID' });
CompletedProblemSets.belongsTo(Student, { foreignKey: 'StudentID' });

ProblemSet.hasMany(CompletedProblemSets, { foreignKey: 'ProblemSetID' });
CompletedProblemSets.belongsTo(ProblemSet, { foreignKey: 'ProblemSetID' });

CompletedProblemSets.hasOne(Score, { foreignKey: 'CompletionID' });
Score.belongsTo(CompletedProblemSets, { foreignKey: 'CompletionID' });

Student.hasMany(Leaderboard, { foreignKey: 'StudentID' });
Leaderboard.belongsTo(Student, { foreignKey: 'StudentID' });

ProblemSet.hasMany(Leaderboard, { foreignKey: 'ProblemSetID' });
Leaderboard.belongsTo(ProblemSet, { foreignKey: 'ProblemSetID' });

module.exports = { Professor, Section, Student, ProblemSet, SectionProblemSet, CompletedProblemSets, Score, Leaderboard };
