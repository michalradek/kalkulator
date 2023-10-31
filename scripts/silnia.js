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
