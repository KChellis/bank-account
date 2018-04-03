function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}
function addCommas(number) {
  var string = number.toString();
  var array = [];
  var extra = "";
  if (string.length < 3) {
    return string;
  }
  if (string.length % 3 === 1) {
    extra = string.slice(0, 1);
  } else if (string.length % 3 === 2) {
    extra = string.slice(0, 2);
  }
  for (var i = (string.length - 3) ; i >= 0; i-=3) {
    array.unshift(string.slice(i, 3 + i));
  }
  if (extra) {
    return extra + "," + array.join(",");
  }
  return array.join(",");
}
Account.prototype.transaction = function (num) {
  return this.balance += num;
};

$(function(){
  $('#acct-submit').submit(function(event){
    event.preventDefault();
    var userName = $('#name').val();
    var userBalance = parseInt($('#balance').val());
    var getBalance = new Account(userName, userBalance);
    var button;

    $('#showBalance').text(addCommas(getBalance.balance));
    $('.card').slideUp();
    $('#user').text(userName);
    $('.hidden').show();
    $('#ledger').append('<tr><td>Created Account</td><td>' + getBalance.balance + '</td></tr>');

    $(".button").click(function(){
      button = $(this).val();
    });

    $('#wdForm').submit(function(event) {
      event.preventDefault();
      var amount = parseInt($('#amount').val());
      var action;
      if (button === "withdraw") {
        amount = -amount;
        action = "Withdrew";
      } else if (button === "deposit") {
        action = "Deposited";
      }
      var newBalance = getBalance.transaction(amount);
      $('#showBalance').text(addCommas(newBalance));
      $('#ledger').append('<tr><td>' + action + " " + Math.abs(amount) + '</td><td>' + newBalance + '</td></tr>');
    });
  });
});
