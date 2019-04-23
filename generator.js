module.exports = function(n) {
  // do work here
  let numberArray = [];
  let outputArray = [];

  for (let i = 0; i < n; i++) {
    numberArray.push(i);
  }

  for (let i = 0; i < n; i++) {
    let random = Math.floor(Math.random() * (n - i));
    let newNum = numberArray.splice(random, 1);
    outputArray.push(newNum);
  }

  return outputArray;
};
