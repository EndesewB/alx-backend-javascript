export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    .filter((obj) => obj.location === city)
    .map((student) => {
      const updatedStudent = { ...student };

      newGrade.forEach((studentGrade) => {
        if (studentGrade.studentId === updatedStudent.id) {
          updatedStudent.grade = studentGrade.grade;
        }
      });

      if (!('grade' in updatedStudent)) {
        updatedStudent.grade = 'N/A';
      }

      return updatedStudent;
    });
}
