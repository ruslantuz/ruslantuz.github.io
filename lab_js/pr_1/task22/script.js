function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}
let ivan = {name: 'Ivan', age: 25};
let petro = {name: 'Petro', age: 30};
let mariya = {name: 'Mariya', age: 28}
const users = [ivan, petro, mariya];

console.log('До сортування:', users);
sortByAge(users);
console.log('Після сортування за age:', users);