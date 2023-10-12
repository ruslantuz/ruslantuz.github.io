function copySorted(arr) {
  return [...arr].sort();
}

const arr = ['HTML', 'JavaScript', 'CSS'];
const sortedCopy = copySorted(arr);

console.log('Відсортована копія:', sortedCopy);
console.log('Оригінальний масив:', arr);