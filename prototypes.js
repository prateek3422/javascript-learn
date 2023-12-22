function createUser(username, price) {
  this.username = username;
  this.price = price;
}

createUser.prototype.increase = function () {
  this.price++;
};

createUser.prototype.printme = function () {
  console.log(`price is ${this.price}`);
};

const chai = new createUser("chai", 30);
const tea = new createUser("tea", 130);

// chai.printme();
// tea.printme();

let myHero = ["naruto", "sasuke"];

let hero = {
  naruto: "kurama",
  sasuke: "susano",

  sasukepoweris: function () {
    console.log(`sasuke power is ${this.sasuke}`);
  },
};

Object.prototype.prateek = function () {
  console.log(`proteek is aceess all objects`);
};

hero.prateek();
