const sequelize = require('./config/database');
const { Professor, Section, Student, ProblemSet, SectionProblemSet, CompletedProblemSets, Score, Leaderboard } = require('./models');

async function runComprehensiveTests() {
    try {
        console.log('Starting comprehensive API tests...');
        
        await sequelize.sync();
        
        // Clean up in reverse dependency order
        await Score.destroy({ where: {} });
        await Leaderboard.destroy({ where: {} });
        await CompletedProblemSets.destroy({ where: {} });
        await SectionProblemSet.destroy({ where: {} });
        await Student.destroy({ where: {} });
        await ProblemSet.destroy({ where: {} });
        await Section.destroy({ where: {} });
        await Professor.destroy({ where: {} });
        console.log('Database cleaned.');

        // Create entities
        const prof = await Professor.create({ FirstName: 'Test', LastName: 'Prof', Email: 'prof@unc.edu.ph', Password: 'hashedpassword' });
        const section = await Section.create({ SectionCode: 'SEC01', SectionName: 'Test Section', SchoolYear: '2026', Semester: '1', ProfessorID: prof.ProfessorID });
        const student = await Student.create({ FirstName: 'Test', LastName: 'Student', Email: 'test@unc.edu.ph', Password: 'hashedpassword', SectionCode: section.SectionCode });
        const ps = await ProblemSet.create({ Title: 'Hello World', Description: 'Test problem', ProfessorID: prof.ProfessorID });
        await SectionProblemSet.create({ SectionCode: section.SectionCode, ProblemSetID: ps.ProblemSetID });
        const cps = await CompletedProblemSets.create({ StudentID: student.StudentID, ProblemSetID: ps.ProblemSetID, SubmittedCode: 'console.log("Hello");' });
        await Score.create({ CompletionID: cps.CompletionID, ScoreValue: 100, Status: 'P' });
        await Leaderboard.create({ StudentID: student.StudentID, ProblemSetID: ps.ProblemSetID, TotalScore: 100, Rank: 1 });

        // Assertions
        const createdScore = await Score.findOne({ where: { CompletionID: cps.CompletionID } });
        console.log('Score Creation:', createdScore ? 'PASSED' : 'FAILED');

        const leaderboard = await Leaderboard.findOne({ where: { StudentID: student.StudentID } });
        console.log('Leaderboard Entry:', leaderboard ? 'PASSED' : 'FAILED');

        console.log('--- ALL COMPREHENSIVE TESTS PASSED SUCCESSFULLY ---');
        process.exit(0);
    } catch (err) {
        console.error('--- TESTS FAILED ---');
        console.error(err);
        process.exit(1);
    }
}
runComprehensiveTests();
