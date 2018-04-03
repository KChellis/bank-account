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

$(function(){
  $('#acct-submit').submit(function(event){
    event.preventDefault();
    var userName = $('#name').val();
    var userBalance = parseInt($('#balance').val());
    var getBalance = new Account(userName, userBalance);

    $('#balance').text(getBalance.balance);
    $('.hidden').show();
  });
});
