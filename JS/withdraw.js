document.getElementById("btn-withdraw").addEventListener("click", function(){
    // console.log("added")
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountSting = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountSting);
    // console.log(newWithdrawAmount);
    withdrawField.value = "";

    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalEsting = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalEsting);
    // console.log(previousWithdrawTotal);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    const balanceElement = document.getElementById("balance-total");
    const previousBalanceTotalEstring = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalEstring);
    
    const newBalaneTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalaneTotal;
})