function groupById(arr) {
  return arr.reduce((result, user) => {
    result[user.id] = user;
    return result;
  }, {});
}

const users = [
  {id: 'iвaн', name: "Iван Iванко", age: 20}, 
  {id: 'пeтрo', name: "Пeтро Петренко", age: 31},
  {id: 'ганна', name: "Ганна Іванко", age: 24}

];

const usersById = groupById(users);
console.log('Об\'єкти з групуванням за id:', usersById);