const user = {
  name: "Alisson",
  message: () => {
    // console.log(`Olá, ${user.name}`);
    console.log(`Olá, ${user.name}`);
  },
};

user.message();
console.log(user.name);
user.name = "Lucas";
console.log(user.name);
