export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    let value = array[idx];
    arrray[idx] = appendString + value;
  }

  return array;
}
