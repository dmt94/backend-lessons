const promiseOne = new Promise((res, rej) => 
setTimeout(res, 3000));

const promiseTwo = new Promise((res, rej) => 
setTimeout(rej, 3000));

//runs only when BOTH promises are resolved, short-circuits when any promise is rejected
Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
.catch(e => console.log('something failed', e));


//all settled 2020, runs all promises regardless of status
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
.catch(e => console.log('something failed', e));