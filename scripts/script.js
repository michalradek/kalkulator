const select = document.getElementById("selectAlgorytm");
const silnia = document.getElementById("silnia");
const test = document.getElementById("test");

function setVisibility(selectedId) {
    silnia.style.visibility = (selectedId === 'silnia') ? 'visible' : 'hidden';
    test.style.visibility = (selectedId === 'test') ? 'visible' : 'hidden'; 
}


select.addEventListener('change', function() {
    setVisibility(select.value);
})

setVisibility(select.value);