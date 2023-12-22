function User(username, email, isLogedin) {
  this.username = username;
  this.email = email;
  this.isLogedin = isLogedin;

  return this;
}

// new keyWord not use

// const userOne = user("prateek", "12@gmail.com,", true);
// const userTwo = user("prateek singh", "12@gmail.com,", true);

// using new keyWord
const userOne = new User("prateek", "12@gmail.com,", true);
const userTwo = new User("prateek singh", "12@gmail.com,", true);
console.log(userOne);
console.log(userTwo);

// instanceof learn about this with docs
