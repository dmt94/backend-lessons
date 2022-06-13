// // finally

// const urls = [
//   'http://swapi.dev/api/people/1',
//   'http://swapi.dev/api/people/2',
//   'http://swapi.dev/api/people/3',
//   'http://swapi.dev/api/people/4'
// ]

// Promise.all(urls.map(url =>
//     fetch(url).then(people => people.json())
// ))
//   .then(array => {
//     throw Error;
//     console.log('1', array[0])
//     console.log('2', array[1])
//     console.log('3', array[2])
//     console.log('4', array[3])
//   })
//   .catch(err => console.log('ughhhh fix it!', err))
//   .finally(data => console.log('extra')) //will always run




  // for await of : takes each item from array of promises that returns to us in correct order all responses

  const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];
  
  const getData = async function () {
    try {
      const [users, posts, albums] = await Promise.all(
        urls.map(async function (url) {
          const response = await fetch(url);
          return response.json();
        }),
      );
      console.log("users", users);
      console.log("posta", posts);
      console.log("albums", albums);
    } catch (err) {
      console.log("ooooooops", err);
    }
  };


  const loopThroughUrls = url => {
    for (url of urls) {
      console.log(url);
    }
  }

  // console.log(loopThroughUrls());

  const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
      const data = await request.json();
      console.log(data);
    }
  }

  console.log(getData2());

