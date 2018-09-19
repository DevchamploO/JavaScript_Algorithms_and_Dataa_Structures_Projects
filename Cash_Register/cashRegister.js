function checkCashRegister(price, cash, cid) {

  //money denominations
  var money = [{name: 'ONE HUNDRED', value: 100.00}, {name: 'TWENTY', value: 20.00}, {name: 'TEN', value: 10.00}, {name: 'FIVE', value: 5.00}, {name: 'ONE', value: 1.00}, {name: 'QUARTER', value: 0.25}, {name: 'DIME', value: 0.10}, {name: 'NICKLE', value: 0.05}, {name: 'PENNY', value: 0.01}];
  
  //change owed from register
  var changeDue = cash - price;
  
  var sum = cid.reduce(function(all, item) {
    return all + item[1];
  }, 0.0);
  
  if(sum < changeDue) {
    return 'Insufficient Funds';
  } else if(sum === changeDue) {
    return 'Closed';
  }
  
  //reverse cid to match order of money array
  cid = cid.reverse();
  
  var change = money.reduce(function(all, item, index) {
    if(changeDue >= item.value) {
      var amount  = 0.0;
      while(changeDue >= item.value && cid[index][1] >= item.value) {
        amount += item.value;
        changeDue -= item.value;
        changeDue = Math.round(changeDue * 100)/100;
        cid[index][1] -= item.value;
      }
      all.push([item.name, amount]);
      return all;
    } else {
      return all;
    }
  }, []);
  
  return change.length > 0 && changeDue === 0 ? change : 'Insufficient Funds';
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);