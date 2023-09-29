export default function createReportObject(employeesList) {
    const obj = {
        allEmployees: {
          ...employeesList,
        },
        
        getNumberOfDepartments: () =>{ return [...employeesList].length}
    };
}
