export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const department = Object.keys(employees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (
        currentEmployeeIndex >=
        employees[department[currentDepartmentIndex]].length
      ) {
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
      }

      if (currentDepartmentIndex >= department.length) {
        return { done: true };
      }

      const result = {
        value:
          employees[department[currentDepartmentIndex]][currentEmployeeIndex],
        done: false,
      };

      currentEmployeeIndex += 1;

      return result;
    },
  };
}
