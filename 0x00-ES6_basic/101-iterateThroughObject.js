export default function iterateThroughObject(reportWithIterator) {
  const arr = [...reportWithIterator];
  const newArr = [];

  for (const names of arr) {
    for (const name of names) {
      name.split(',');
      newArr.push(name);
    }
  }
  return newArr.join(' | ');
}
