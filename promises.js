// const urls = [
//   'https://jsonplaceholder.typicode.com/users',
//   'https://jsonplaceholder.typicode.com/posts',
//   'https://jsonplaceholder.typicode.com/albums',
// ]

// Promise.all(urls.map(url => {
//   return fetch(url).then(resp => resp.json())
// })).then(results => {
//   console.log(results[0])
//   console.log(results[1])
//   console.log(results[2])
// }).catch(() => console.log('you caught...an error!'))

const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err));


async function playerStart() {
  const first = await movePlayer(100, 'Left');
  const second = await movePlayer(400, 'Left');
  await movePlayer(10, 'Right');
  await movePlayer(330, 'Left');
}

// ASYNC AWAIT

async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder/typicode.com/users')
  const data = await resp.json();
  console.log(data);
}