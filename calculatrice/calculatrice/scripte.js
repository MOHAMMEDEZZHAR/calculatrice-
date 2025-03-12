let memory = 0;

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
    document.getElementById("memory-bar").textContent = '';
}

function clearEntry() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function backspace() {
    clearEntry();
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Erreur";
    }
}

function toggleSign() {
    const display = document.getElementById("display");
    if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}

function calculateSqrt() {
    let value = parseFloat(document.getElementById("display").value);
    if (value < 0) {
        document.getElementById("display").value = "Erreur";
    } else {
        document.getElementById("display").value = Math.sqrt(value);
    }
}

function calculatePercent() {
    let value = parseFloat(document.getElementById("display").value);
    document.getElementById("display").value = value / 100;
}

function calculateInverse() {
    let value = parseFloat(document.getElementById("display").value);
    if (value === 0) {
        document.getElementById("display").value = "Erreur";
    } else {
        document.getElementById("display").value = 1 / value;
    }
}

function memoryClear() {
    memory = 0;
    document.getElementById("memory-bar").textContent = '';
}

function memoryRecall() {
    document.getElementById("display").value = memory;
}

function memoryStore() {
    memory = parseFloat(document.getElementById("display").value);
    document.getElementById("memory-bar").textContent = 'M';
}

function memoryAdd() {
    memory += parseFloat(document.getElementById("display").value);
    document.getElementById("memory-bar").textContent = 'M';
}
