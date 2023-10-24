screen = document.getElementById('screen');


function show(value) {
    screen.value += value;
}

function clearDisplay() {
    screen.value = "";
}

function deleteLast () {
    screen.value = screen.value.slice(0, -1);
}
function calculate() {

    const expression = document.getElementById('screen').value;
    try {
        const results = eval(expression);

        if(!isNaN(results)) {
            if(isFinite(results)) {
                screen.value = results.toFixed(2);
            }
            else {
                alert("Proszę nie dzielić przez 0")
            }
        }
        else {
            alert("Błąd obliczenia");
        }
    }catch(error) {
           alert(error.message); 
    }

}
