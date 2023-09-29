export default function iterateThroughObject(reportWithIterator) {
    const arr = [...reportWithIterator];

    return arr.join(' | ');
}
