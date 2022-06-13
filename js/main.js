let app = Vue.createApp({
    data() {
        return {
            firstName: "",
            lastName: "",
            amountToInvest: null,
            daysAmounts: null,
            response: "",
            responseTable: null,
            tbl_r0c0: "",
            tbl_r0c1: "",
            tbl_r0c2: "",
            tbl_r1c0: "",
            tbl_r1c1: "",
            tbl_r1c2: "",
            tbl_r2c0: "",
            tbl_r2c1: "",
            tbl_r2c2: "",
            tbl_r3c0: "",
            tbl_r3c1: "",
            tbl_r3c2: "",
            tbl_r4c0: "",
            tbl_r4c1: "",
            tbl_r4c2: "",
        }
    },
    methods: {
        emptyTextChecker: function (txtToCheck) {
            let str = new String(txtToCheck);

            // Empty text
            if (str.trim() === "")
                return false;

            return true;
        },

        numberChecker: function (numToCheck) {
            let numToCheckParsed = Number.parseFloat(numToCheck);

            if (typeof (numToCheckParsed) === 'number')
                return true;
            else 
                return false;
        },

        checkFields: function () {
            // Check if the firstName is empty
            if (!this.emptyTextChecker(this.firstName)) {
                this.response = "¡Debe ingresar su nombre!";
                return false;
            }

            // Check if the lastName is empty
            if (!this.emptyTextChecker(this.lastName)) {
                this.response = "¡Debe ingresar su apellido!";
                return false;
            }

            // Check if the amountToInvest is empty
            if (!this.emptyTextChecker(this.amountToInvest)) {
                this.response = "¡Debe ingresar el monto a invertir!";
                return false;
            }

            // Check if the amountToInvest is a number
            if (!this.numberChecker(this.amountToInvest)) {
                this.response = "¡El monto a invertir no es un número!";
                return false;
            }

            // Check if the amountToInvest is a positive number
            if (this.amountToInvest < 0) {
                this.response = "¡El monto a invertir no puede ser negativo!";
                return false;
            }

            // Check if the amount to invest is at least $1000
            if (this.amountToInvest < 1000) {
                this.response = "¡El monto a invertir debe de ser al menos $1000!";
                return false;
            }

            // Check if the daysAmounts is empty
            if (!this.emptyTextChecker(this.daysAmounts)) {
                this.response = "¡Debe ingresar la cantidad de días!";
                return false;
            }

            // Check if the daysAmounts is a number
            if (!this.numberChecker(this.daysAmounts)) {
                this.response = "¡La cantidad de días a invertir no es un número!";
                return false;
            }

            // Check if the daysAmounts is a positive number
            if (this.daysAmounts < 0) {
                this.response = "¡La cantidad de días a invertir no puede ser negativo!";
                return false;
            }

            // Check if the daysAmounts is a integer
            if (String(this.daysAmounts).indexOf('.') > -1 || String(this.daysAmounts).indexOf(',') > -1) {
                this.response = "¡La cantidad de días a invertir debe ser un valor entero!";
                return false;
            }

            // Check if the daysAmounts is at least 30
            if (this.daysAmounts < 30) {
                this.response = "¡La cantidad de días a invertir debe ser al menos 30 días!"; 
                return false;
            }

            return true;
        },

        calculateFixedTerm: function (initialAmount, days) {
            let percentage = 0;

            if (days >= 30 && days < 60)
                percentage = 40;

            if (days >= 60 && days < 120)
                percentage = 45;

            if (days >= 120 && days < 360)
                percentage = 50;

            if (days >= 360)
                percentage = 65;

            let result = Number(initialAmount) + Number(initialAmount) * (Number(days) / 360) * (Number(percentage) / 100);

            return result.toFixed(2);
        },

        calculateBtnOnPressed: function () {
            // Check the fields
            let foo = this.checkFields(this.firstName, this.lastName, this.amountToInvest, this.daysAmounts);

            if (!foo)
                return;

            // Calculate the fixedTerm
            let fixedTermResult = this.calculateFixedTerm(this.amountToInvest, this.daysAmounts);

            // Show the response
            this.response = "El monto a obtener del plazo fijo sera de $" + fixedTermResult;
        },

        reinvestBtnOnPressed: function () {
            // Check the fields   
            let foo = this.checkFields(this.firstName, this.lastName, this.amountToInvest, this.daysAmounts);

            if (!foo)
                return;
            
            this.calculateBtnOnPressed();

            let i, fixedTermResult1, fixedTermResult2, fixedTermResult3, fixedTermResult4 = 0;

            for (let step = 0; step < 4; step++) {
                if (step === 0)
                    fixedTermResult1 = this.calculateFixedTerm(this.amountToInvest, this.daysAmounts);
                
                if (step === 1)
                    fixedTermResult2 = this.calculateFixedTerm(fixedTermResult1, this.daysAmounts);
                
                if (step === 2)
                    fixedTermResult3 = this.calculateFixedTerm(fixedTermResult2, this.daysAmounts);
                
                if (step === 3)
                    fixedTermResult4 = this.calculateFixedTerm(fixedTermResult3, this.daysAmounts);
            }

            // Populate the responseTable
            this.tbl_r0c0 = 'Período';
            this.tbl_r0c1 = 'Monto inicial';
            this.tbl_r0c2= 'Monto obtenido';

            this.tbl_r1c0 = '1';
            this.tbl_r1c1 = this.amountToInvest;
            this.tbl_r1c2 = fixedTermResult1;

            this.tbl_r2c0 = '2';
            this.tbl_r2c1 = fixedTermResult1;
            this.tbl_r2c2 = fixedTermResult2;

            this.tbl_r3c0 = '3';
            this.tbl_r3c1 = fixedTermResult2;
            this.tbl_r3c2 = fixedTermResult3;

            this.tbl_r4c0 = '4';
            this.tbl_r4c1 = fixedTermResult3;
            this.tbl_r4c2 = fixedTermResult4;
        },

        resetBtnOnPressed: function () {
            // Clear inputs
            this.firstName = "";
            this.lastName = "";
            this.amountToInvest = null;
            this.daysAmounts = null;

            // Clear response
            this.response = "";

            // Clear responseTable
            this.tbl_r0c0 = '';
            this.tbl_r0c1 = '';
            this.tbl_r0c2 = '';

            this.tbl_r1c0 = '';
            this.tbl_r1c1 = '';
            this.tbl_r1c2 = '';

            this.tbl_r2c0 = '';
            this.tbl_r2c1 = '';
            this.tbl_r2c2 = '';

            this.tbl_r3c0 = '';
            this.tbl_r3c1 = '';
            this.tbl_r3c2 = '';

            this.tbl_r4c0 = '';
            this.tbl_r4c1 = '';
            this.tbl_r4c2 = '';
        },
    },
    computed: {

    }
});

app.mount('#app');