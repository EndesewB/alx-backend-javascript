function getListStudentIds(studentArray) {
  if (!Array.isArray(studentArray)) {
    return [];
  }

  const ids = studentArray.map(student => student.id);
  return ids;
}

export default getListStudentIds;
