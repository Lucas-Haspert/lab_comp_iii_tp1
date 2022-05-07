function calculateBtnOnPressed() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let amountToInvest = document.getElementById("amountToInvest").value;
    let daysAmounts = document.getElementById("daysAmounts").value;

    let foo = checkFields(firstName, lastName, amountToInvest, daysAmounts);

    if (!foo) {
        return;
    }
    
    let fixedTermResult = calculateFixedTerm(amountToInvest, daysAmounts);

    printResponse("El monto a obtener del plazo fijo sera de $" + fixedTermResult);   
}

function reinvestBtnOnPressed() {
    
}




