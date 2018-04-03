function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.withdraw = function (num) {
  return this.balance -= num;
};

Account.prototype.deposit = function (num) {
  return this.balance += num;
};
