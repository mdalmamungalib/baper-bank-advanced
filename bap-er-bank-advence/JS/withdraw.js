document.getElementById("btn-withdraw").addEventListener("click", function(){
    const newWithdrawAmount = getInputFieldById("withdraw-field");
    const previousWithdrawTotal = getTextElimentById("withdraw-total");
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElimentValueById("withdraw-total", newWithdrawTotal);

    const previousBalanceTotal = getTextElimentById("balance-total");
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElimentValueById("balance-total", newBalanceTotal);
});