# Cash Register

This function accepts multiple arguments. 
The first argument is the price (price), second is the cash payment (cash), last is the cash in the drawer (cid).

The function returns an object.

The object will return:

* `{status: "INSUFFICIENT_FUNDS", change: []}` if cid is less than the change due or if it cannot return exact change.

* `{status: "CLOSED", change: [...]}` with cid as the value of the change key if it is eaqual to the change due.

* `{status: "OPEN", change: [...]}` with the change due in coins or bills, sorted in highest to lowest order, as the value of the change key.

## How to use:

Call the _checkCashRegister()_ function with the required parameters.

An example: `checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);`
