document.getElementById("btn-diposit").addEventListener("click", function(){

    const dipositFeld = document.getElementById("diposit-field");
    const newDipositAmoutnString = dipositFeld.value;
    const newDipositAmoutn = parseFloat(newDipositAmoutnString);
    // console.log(newDipositAmoutn);
    dipositFeld.value = "";

    const dipositTotalEliment = document.getElementById("diposit-total");
    const previousDipositEstring = dipositTotalEliment.innerText;
    const previousDiposit = parseFloat(previousDipositEstring);
    // console.log(previousDiposit);

    const newDipositTotal = previousDiposit + newDipositAmoutn;

    dipositTotalEliment.innerText = newDipositTotal;


    const balanceTotalElement = document.getElementById("balance-total");
    const previousbalaceTotalEstring = balanceTotalElement.innerText;
    const previousbalaceTotalAmount = parseFloat(previousbalaceTotalEstring);

    const newBalaneTotal = previousbalaceTotalAmount + newDipositTotal;
    balanceTotalElement.innerText = newBalaneTotal;



})