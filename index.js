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
  const result = array.filter((a) => a.gender !== "female").map((a) => a.name);

  return result;
};

console.log(filterForFemale(array));
