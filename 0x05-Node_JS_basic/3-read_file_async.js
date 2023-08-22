const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n').slice(1); // Remove empty lines and header

    console.log(`Number of students: ${lines.length}`);

    const classToStudents = {};
    lines.forEach((line) => {
      const [name, age, nationality, className] = line.split(',');
      if (!classToStudents[className]) {
        classToStudents[className] = [];
      }
      classToStudents[className].push(name);
    });

    for (const cls in classToStudents) {
      if (Object.prototype.hasOwnProperty.call(classToStudents, cls)) {
        const students = classToStudents[cls].join(', ');
        console.log(`Number of students in ${cls}: ${classToStudents[cls].length}. List: ${students}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
