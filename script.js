const resultadoEl = document.getElementById("resultado");

resultadoEl.innerHTML = "0";

function insert(num) {
    if (num === "AC") {
        resultadoEl.innerHTML = "0";
        return;
    }

    if (resultadoEl.innerHTML === "0") {
        resultadoEl.innerHTML = num;
    } else {
        resultadoEl.innerHTML += num;
    }
}

function backspace() {
    const value = resultadoEl.innerHTML.slice(0, -1);
    resultadoEl.innerHTML = value === "" ? "0" : value;
}

function calculate() {
    const expression = resultadoEl.innerHTML.replace(/X/g, "*").replace(/÷/g, "/");

    try {
        resultadoEl.innerHTML = String(eval(expression));
    } catch (error) {
        resultadoEl.innerHTML = "Erro";
    }
}