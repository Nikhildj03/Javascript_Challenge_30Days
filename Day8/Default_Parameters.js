// Activity 4: Default Parameters

// tasl 7 : Write a finction that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function multi(x, y = 1) {
  let product = x * y;
  return product;
}

console.log(multi(5, 5));
console.log(multi(5));

