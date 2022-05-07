function checkFields(firstName, lastName, amountToInvest, daysAmounts) {
    // Check if the firstName is empty
    if (!emptyTextChecker(firstName)) {
        // Show error message
        emptyFirstNameMessage();

        return false;
    }

    // Check if the lastName is empty
    if (!emptyTextChecker(lastName)) {
        // Show error message
        emptyLastNameMessage();

        return false;
    }
    
    // Check if the amountToInvest is empty
    if (!emptyTextChecker(amountToInvest)) {
        // Show error message
        emptyAmountToInvestMessage();

        return false;
    }

    // Check if the amountToInvest is a number
    if (!numberChecker(amountToInvest)) {
        // Show error message
        showError("El monto a invertir no es un número.");

        return false;
    }

    // Check if the amountToInvest is a positive number
    if (amountToInvest < 0) {
        // Show error message
        showError("El monto a invertir no puede ser negativo.");

        return false;
    }
    
    // Check if the amount to invest is at least $1000
    if (amountToInvest < 1000) {
        // Show error message
        showError("El monto a invertir debe de ser al menos $1000.");

        return false;
    }

    // Check if the daysAmounts is empty
    if (!emptyTextChecker(daysAmounts)) {
        // Show error message
        emptyDaysAmountsMessage();

        return false;
    }

    // Check if the daysAmounts is a number
    if (!numberChecker(daysAmounts)) {
        // Show error message
        showError("La cantidad de días a invertir no es un número.");

        return false;
    }

    // Check if the daysAmounts is a positive number
    if (daysAmounts < 0) {
        // Show error message
        showError("La cantidad de días a invertir no puede ser negativo.");

        return false;
    }
    
    // Check if the daysAmounts is a integer
    if (String(daysAmounts).indexOf('.') > -1 || String(daysAmounts).indexOf(',') > -1) {
        // Show error message
        showError("La cantidad de días a invertir debe ser un valor entero.");

        return false;
    }

    // Check if the daysAmounts is at least 30
    if (daysAmounts < 30) {
        // Show error message
        showError("La cantidad de días a invertir debe ser al menos 30 días.");

        return false;
    }

    return true;
}

function emptyTextChecker(txtToCheck) {
    let str = new String(txtToCheck);

    // Empty text
    if (str.trim() === "") {
        return false;
    }

    return true;
}

function numberChecker(numToCheck) {
    let numToCheckParsed = Number.parseFloat(numToCheck);

    if (typeof(numToCheckParsed) === 'number') {
        return true;
    } else {
        return false;
    }
}

function calculateFixedTerm(initialAmount, days) {
    let percentage = 0;

    if (days >= 30 && days < 60) {
        percentage = 40;
    }

    if (days >= 60 && days < 120) {
        percentage = 45;
    }

    if (days >= 120 && days < 360) {
        percentage = 50;
    }

    if (days >= 360) {
        percentage = 65;
    }

    let result = Number(initialAmount) + Number(initialAmount)  * (Number(days)/360) * (Number(percentage)/100);

    return result;
}

function printResponse(pTxt) {
    const element = document.getElementById("response");
    element.firstChild.data = pTxt;
}

function printResponseTable() {
    
}


