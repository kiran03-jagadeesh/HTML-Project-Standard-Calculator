function clearDisplay() {
    document.getElementById('result').innerText = '0';
}

function deleteLast() {
    const resultElement = document.getElementById('result');
    let display = resultElement.innerText;
    if (display.length > 1) {
        resultElement.innerText = display.slice(0, -1);
    } else {
        resultElement.innerText = '0';
    }
}

function appendToDisplay(value) {
    const resultElement = document.getElementById('result');
    let display = resultElement.innerText;
    if (display === '0') {
        resultElement.innerText = value;
    } else {
        resultElement.innerText += value;
    }
}

function calculateResult() {
    const resultElement = document.getElementById('result');
    let display = resultElement.innerText;
    try {
        let result = eval(display.replace('%', '/100'));  // Handle percentage
        resultElement.innerText = result;
    } catch (e) {
        resultElement.innerText = 'Error';
    }
}
