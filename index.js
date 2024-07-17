// Problem 1.--=> Array Filtering and Mapping

const persons = [
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

const filterForFemale = (persons) => {
  const result = persons
    .filter((x) => x.gender !== "female")
    .map((y) => y.name);

  return result;
};

// console.log(filterForFemale(persons));

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

// console.log(composedFunc(3));

// Problem 4.--=> Sorting Objects

const cars = [
  {
    model: "car001",
    year: 2000,
    make: "x",
  },
  {
    model: "car002",
    year: 2003,
    make: "y",
  },
  {
    model: "car003",
    year: 2001,
    make: "z",
  },
  {
    model: "car004",
    year: 2005,
    make: "m",
  },
];

const sortingCar = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

// console.log(sortingCar(cars));

// Problem 5.--=>  Find and Modify

const findAndUpdatePerson = (persons, singlePerson, age) => {
  let searchedPerson = persons.find((p) => p.name === singlePerson);

  if (singlePerson) {
    searchedPerson.age = age;
  }

  return persons;
};

console.log(findAndUpdatePerson(persons, "hasan", 30));
