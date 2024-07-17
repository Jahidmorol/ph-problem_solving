// Problem 1.--=> Array Filtering and Mapping

const array = [
  {
    name: "hasan",
    age: 14,
    gender: "male",
  },
  {
    name: "fahima",
    age: 16,
    gender: "female",
  },
  {
    name: "ridoy",
    age: 10,
    gender: "male",
  },
  {
    name: "kartika",
    age: 18,
    gender: "female",
  },
];

const filterForFemale = (array) => {
  const result = array.filter((x) => x.gender !== "female").map((y) => y.name);

  return result;
};

// console.log(filterForFemale(array));

// Problem 2.--=> Object Manipulation

const books = [
  {
    title: "the first book",
    author: "John",
    year: 2000,
  },
  {
    title: "the second book",
    author: "morol",
    year: 2001,
  },
  {
    title: "the third book",
    author: "hasan",
    year: 2002,
  },
  {
    title: "the fourth book",
    author: "laila",
    year: 2003,
  },
];

const bookNewArray = (books) => {
  return books.map((book) => book.title);
};

// console.log(bookNewArray(books));

// Problem 3.--=> Function Composition

const squareNum = (num) => {
  return num * num;
};
const dabbleNum = (num) => {
  return num + num;
};
const addNum = (num) => {
  return num + 5;
};

const composedFunc = (num) => {
  return addNum(dabbleNum(squareNum(num)));
};

console.log(composedFunc(3));
