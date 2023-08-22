const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines

        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        const fields = lines[0].split(',');
        const students = lines.slice(1);

        const studentData = students.map(student => student.split(','));

        const studentCount = studentData.length;

        console.log(`Number of students: ${studentCount}`);

        fields.forEach((field, index) => {
            const fieldStudents = studentData.map(student => student[index]);
            const uniqueFieldStudents = [...new Set(fieldStudents)];
            const fieldStudentCount = uniqueFieldStudents.length;
            console.log(`Number of students in ${field}: ${fieldStudentCount}. List: ${uniqueFieldStudents.join(', ')}`);
        });
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
