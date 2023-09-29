export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: {
      ...employeesList,
    },

    getNumberOfDepartments: () => {
      return Object.keys(obj.allEmployees).length;
    },
  };

  return obj;
}
