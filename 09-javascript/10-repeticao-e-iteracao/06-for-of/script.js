// FOR...OF: Itera sobre valores de um objeto iterável

let students = ["Alisson", "Rodrigo", "Lucas"];

for (let student of students) {
  console.log(student);
}

let user = [
  {
    name: "Alisson",
    email: "alisson@gmail.com",
  },
];

for (let value of user) {
  console.log(value.email)
}
