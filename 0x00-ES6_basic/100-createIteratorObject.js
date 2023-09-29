export default function createIteratorObject(report) {
  const array = [];

  for (const item of Object.values(report.allEmployees)) {
    array.push(item);
  }

  return array;
}
