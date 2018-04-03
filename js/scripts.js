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
    $('#showBalance').text(getBalance.balance);
    $('#acct-submit').slideUp();
    $('.hidden').show();
    $('#ledger').append('<tr><td>Created Account</td><td>' + getBalance.balance + '</td></tr>');

    $('#withdrawForm').submit(function(event) {
      event.preventDefault();
      var withdraw = parseInt($('#withdraw').val());
      var newBalance = getBalance.withdraw(withdraw);
      $('#showBalance').text(newBalance);
      $('#ledger').append('<tr><td>Withdrew ' + withdraw + '</td><td>' + newBalance + '</td></tr>');
    });

    $('#depositForm').submit(function(event) {
      event.preventDefault();
      var deposit = parseInt($('#deposit').val());
      var newBalance = getBalance.deposit(deposit);
      $('#showBalance').text(newBalance);
      $('#ledger').append('<tr><td>Deposited ' + deposit + '</td><td>' + newBalance + '</td></tr>');
    });
  });


});
