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
    calculateBtnOnPressed();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let amountToInvest = document.getElementById("amountToInvest").value;
    let daysAmounts = document.getElementById("daysAmounts").value;

    let foo = checkFields(firstName, lastName, amountToInvest, daysAmounts);

    if (!foo) {
        return;
    }

    let i = 0;
    let fixedTermResult1, fixedTermResult2, fixedTermResult3 ,fixedTermResult4 = 0;
    
    for (let step = 0; step < 4; step++) {
        if (step == 0) {
            fixedTermResult1 = calculateFixedTerm(amountToInvest, daysAmounts);
        }

        if (step == 1) {
            fixedTermResult2 = calculateFixedTerm(fixedTermResult1, daysAmounts);
        }

        if (step == 2) {
            fixedTermResult3 = calculateFixedTerm(fixedTermResult2, daysAmounts);
        }

        if (step == 3) {
            fixedTermResult4 = calculateFixedTerm(fixedTermResult3, daysAmounts);
        }
      
    }
    
    printResponseTable(amountToInvest, fixedTermResult1, fixedTermResult2, fixedTermResult3, fixedTermResult4);
}

function resetBtnOnPressed() {
    // Get the elements
    let elementFirstName = document.getElementById("firstName");
    let elementLastName = document.getElementById("lastName");
    let elementAmountToInvest = document.getElementById("amountToInvest");
    let elementDaysAmounts = document.getElementById("daysAmounts");
    let elementResponse = document.getElementById("response");
    let elementResponseTable = document.getElementById("responseTable");
    
    // Clear inputs
    elementFirstName.value = '';
    elementLastName.value = '';
    elementAmountToInvest.value = '';
    elementDaysAmounts.value = '';

    // Clear response
    elementResponse.firstChild.data = '';

    // Clear responseTable
    elementResponseTable.rows[0].cells[0].innerHTML = '';
    elementResponseTable.rows[0].cells[1].innerHTML = '';
    elementResponseTable.rows[0].cells[2].innerHTML = '';
    
    elementResponseTable.rows[1].cells[0].innerHTML = '';
    elementResponseTable.rows[1].cells[1].innerHTML = '';
    elementResponseTable.rows[1].cells[2].innerHTML = '';

    elementResponseTable.rows[2].cells[0].innerHTML = '';
    elementResponseTable.rows[2].cells[1].innerHTML = '';
    elementResponseTable.rows[2].cells[2].innerHTML = '';

    elementResponseTable.rows[3].cells[0].innerHTML = '';
    elementResponseTable.rows[3].cells[1].innerHTML = '';
    elementResponseTable.rows[3].cells[2].innerHTML = '';

    elementResponseTable.rows[4].cells[0].innerHTML = '';
    elementResponseTable.rows[4].cells[1].innerHTML = '';
    elementResponseTable.rows[4].cells[2].innerHTML = '';
}




