function getAverageAge(users) {
  if (users.length === 0) {
    return 0;
  }
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}
let john = {name: 'John', age: 25};
let pete = {name: 'Pete', age: 30};
let mary = {name: 'Mary', age: 29};
let arr = [john, pete, mary];

console.log('Середній вік:', getAverageAge(arr));