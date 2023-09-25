export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (departmentIndex < departments.length) {
        const department = departments[departmentIndex];
        if (employeeIndex < department.length) {
          return {
            value: department[employeeIndex++],
            done: false,
          };
        } else {
          // Move to the next department
          departmentIndex++;
          employeeIndex = 0;
          return this.next(); // Recursively call next for the next department
        }
      } else {
        // No more departments or employees
        return {
          done: true,
        };
      }
    },
  };
}
