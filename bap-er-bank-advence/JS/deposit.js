



document.getElementById("btn-diposit").addEventListener("click", function(){

    const newDipositAmount = getInputFieldById("diposit-field");

    const priviusDipositTotal = getTextElimentById("diposit-total");
    // console.log(newDipositAmount, priviusDipositTotal);

    const newDipositTotal = priviusDipositTotal + newDipositAmount;

    setTextElimentValueById("diposit-total", newDipositTotal);

    const previousBalanceTotal = getTextElimentById("balance-total");
    const newBalanceTotal = previousBalanceTotal + newDipositAmount;
    setTextElimentValueById("balance-total", newBalanceTotal);
});

