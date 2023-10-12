function filterRange(arr, a, b) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current >= a && current <= b) {
      result.push(current);
    }
  }

  return result;
}

const arr = [5, 3, 8, 1];

const filtered = filterRange(arr, 1, 4);
console.log('Відфільтрований масив:', filtered);
console.log('Початковий масив:', arr);