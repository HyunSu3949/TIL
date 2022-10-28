const ramdomRobot = function (arr) {
  this.food = arr[Math.floor(Math.random() * arr.length)];
};

ramdomRobot.prototype.eatFood = function () {
  console.log(`냠냠냠 ${this.food}`);
};
const food = new ramdomRobot(["1", "2", "3"]);

console.log(food.food);

food.eatFood();
