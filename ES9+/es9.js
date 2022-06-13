// Object spread operator

const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40
}

const arr = [1,2,3,4,5,6];
function sum (a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

console.log(sum(...arr));

function objectSpread(p1, p2, p3) {
  console.log(p1); //23
  console.log(p2); //5
  console.log(p3); //rest is monkey and bird rest
}

const { tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest);