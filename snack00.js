const student = {
  name: "Vincent",
  surname: "Ruggiero",
  age: 34,
};

for (let key in student) {
  console.log(key, student[key]);
}

const studentA = {
  name: "Paul",
  surname: "Logan",
  age: 34,
};

const studentB = {
  name: "Ted",
  surname: "Mosby",
  age: 30,
};

const studentC = {
  name: "Nico",
  surname: "Robin",
  age: 29,
};
const students = [studentA, studentB, studentC];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
