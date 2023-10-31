const select = document.getElementById("selectAlgorytm");
const label = document.getElementById("algorytmLabel");
const button = document.getElementById("algorytmButton");
const silniaZ = document.getElementById('silniaZ');
const silniaResultSpan = document.getElementById('silniaResultSpan');
const input = document.getElementById('algorytmInput');
const algorytmP = document.getElementById('algorytmP');
select.addEventListener("change", function() {
    
    if(select.value == 'silnia') {
        label.innerHTML = "Wprowadź liczbę dla której chcesz obliczyć silnię"
    }
    else if(select.value == 'fibonaci') {
        label.innerHTML = "Wprowadź liczbę dla której chcesz obliczyć ciąg Fibonaciego";
    }
})

button.addEventListener("click", function() {
    if(select.value == 'silnia') {
        let a = silniaFun(input.value);
        alert(a);
    } 
    else if(select.value == 'fibonaci') {   
        
    }
})