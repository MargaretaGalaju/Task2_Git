function newPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomBoolean = Math.round(Math.random() * 10) % 2 === 0;
      return resolve(randomBoolean);
    }, 1000);
  });
};

var results = {
  response: [], // Array of results from promises
  _true: 0, // Count of true values
  _false: 0 // Count of false values
};

// 1. Create an array of 10 promises using the method ‘newPromise’ defined below.
function createArrayOfPromises() {
  var arrayOfPromises = [];
  for (var i = 0; i < 10; i++) {
    arrayOfPromises.push(newPromise());
  }
  return arrayOfPromises;
}
const arrayOfPromises = createArrayOfPromises();

Promise.all(arrayOfPromises).then(function(resolve) {
  resolve.forEach((resolve) => {
    if (resolve) {
      results._true++
    } else {
      results._false++
    }
  });
  results.response.push(resolve);
});
// 2. Print to console all results together, the count of true values and the count of false values. Combine them into a single object - `results`.
// 3. Save `results` to localStorage with any key.
console.log(results);
localStorage.setItem('promisesResults', JSON.stringify(results));