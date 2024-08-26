$(() => {
    let currentInput = "";
    let operator = "";
    let operand1 = null;

    function updateDisplay(value) {
        $("#display").val(value);
    }

    function evaluateExpression() {
        try {
            if (currentInput !== "") {
                let result = eval(currentInput);
                updateDisplay(result);
                currentInput = result;
            }
        } catch (e) {
            updateDisplay("Error");
        }
    }

    $(".buttons").on("click", "button", function () {
        const buttonText = $(this).text();
        const buttonValue = $(this).val();

        if (buttonText === "Clear") {
            currentInput = "";
            updateDisplay("");
        } else if (buttonText === "=") {
            evaluateExpression();
        } else if (buttonText === "+/-") {
            if (currentInput) {
                currentInput = currentInput.startsWith("-") ? currentInput.slice(1) : "-" + currentInput;
                updateDisplay(currentInput);
            }
        } else if (buttonValue) {
            currentInput += buttonValue;
            updateDisplay(currentInput);
        } else {
            currentInput += buttonText; // Use buttonText instead of buttonValue
            updateDisplay(currentInput);
        }
    });

    // Correcting the square function
    $("#btnSqaure").click(() => { // Use the correct ID `btnSqaure`
        if (currentInput) {
            try {
                currentInput = (Math.pow(parseFloat(currentInput), 2)).toString();
                updateDisplay(currentInput); // Pass `currentInput` to updateDisplay
            } catch (e) {
                updateDisplay("Error");
            }
        }
    });

    // Percent Button
    $("#btnPercent").click(() => {
        if (currentInput) {
            currentInput = (parseFloat(currentInput) / 100).toString();
            updateDisplay(currentInput);
        }
    });
});
