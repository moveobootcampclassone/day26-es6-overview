//12

const sortDescending = (array) => {
  //   return array.sort(); // won't work! we need a function inside sort
  const arr = [...array]; // you don't have to do this step
  return arr.sort((a, b) => b - a);
};

console.log(sortDescending([3, 0, 49, 10, 7, 26]));

// 6
const team = ["Chennai", "Mumbai", "Bangalore"];
const captain = ["Dhoni", "Rohit", "Kohli"];

const newArr = [...team, ...captain];
