export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: {
      ...employeesList,
    },

    getNumberOfDepartments: () => Object.keys(obj.allEmployees).length,
  };

  return obj;
}
