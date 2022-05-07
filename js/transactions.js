function calculateBtnOnPressed() {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let amountToInvest = document.getElementById("amountToInvest").value
    let daysAmounts = document.getElementById("daysAmounts").value
    
    // Check if the firstName is empty
    if (!emptyTextChecker(firstName)) {
        // Show error message
        emptyFirstNameMessage();

        return;
    }

    // Check if the lastName is empty
    if (!emptyTextChecker(lastName)) {
        // Show error message
        emptyLastNameMessage();

        return;
    }
    
    // Check if the amountToInvest is empty
    if (!emptyTextChecker(amountToInvest)) {
        // Show error message
        emptyAmountToInvestMessage();

        return;
    }

    // Check if the amountToInvest is a number
    if (!numberChecker(amountToInvest)) {
        // Show error message
        showError("El monto a invertir no es un número.");

        return;
    }

    // Check if the amountToInvest is a positive number
    if (amountToInvest < 0) {
        // Show error message
        showError("El monto a invertir no puede ser negativo.");

        return;
    }
    
    // Check if the amount to invest is at least $1000
    if (amountToInvest < 1000) {
        // Show error message
        showError("El monto a invertir debe de ser al menos $1000.");

        return;
    }

    // Check if the daysAmounts is empty
    if (!emptyTextChecker(daysAmounts)) {
        // Show error message
        emptyDaysAmountsMessage();

        return;
    }

    // Check if the daysAmounts is a number
    if (!numberChecker(daysAmounts)) {
        // Show error message
        showError("La cantidad de días a invertir no es un número.");

        return;
    }

    // Check if the daysAmounts is a positive number
    if (daysAmounts < 0) {
        // Show error message
        showError("La cantidad de días a invertir no puede ser negativo.");

        return;
    }
    
    // Check if the daysAmounts is a integer
    if (String(daysAmounts).indexOf('.') > -1 || String(daysAmounts).indexOf(',') > -1) {
        // Show error message
        showError("La cantidad de días a invertir debe ser un valor entero.");

        return;
    }

}




