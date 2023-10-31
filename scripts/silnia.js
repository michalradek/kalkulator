const button = document.getElementById('silniaButton');
const input = document.getElementById('silniaInput');
const silniaZ = document.getElementById('silniaZ');
const silniaResultSpan = document.getElementById('silniaResultSpan');

function silniaFun(n) {
    if(n < 0 ) {
        alert("Liczba musi być nieujemna");
        return 0;
    }
    else if(n === 1) {
        return 1;
    }
    else {
        return n * silniaFun(n-1);
    }
}

button.addEventListener("click", function() {
    let a = silniaFun(input.value);
    silniaZ.innerHTML = input.value;
    silniaResultSpan.innerHTML = a;
})