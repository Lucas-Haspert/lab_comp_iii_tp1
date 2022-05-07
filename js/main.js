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

function resetBtnOnPressed() {
    // Get the elements
    let elementFirstName = document.getElementById("firstName");
    let elementLastName = document.getElementById("lastName");
    let elementAmountToInvest = document.getElementById("amountToInvest");
    let elementDaysAmounts = document.getElementById("daysAmounts");
    let elementResponse = document.getElementById("response");
    
    // Clear the elements
    elementFirstName.value = '';
    elementLastName.value = '';
    elementAmountToInvest.value = '';
    elementDaysAmounts.value = '';
    elementResponse.firstChild.data = '';
}




