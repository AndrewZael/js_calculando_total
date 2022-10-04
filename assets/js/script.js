function calculate(){

    // Selecciono elementos HTML de formulario
    const amountElem = document.querySelector('#amount');
    const colorElem = document.querySelector('#color');
    const priceElem = document.querySelector('#price');

    // Selecciono elementos HTML para resultados
    const resultTotalElem = document.querySelector('#resultTotal');
    const resultAmountElem = document.querySelector('#resultAmount');
    const resultColorElem = document.querySelector('#resultColor');

    // Se calcula total
    let total = priceElem.value * amountElem.value;

    // Se pinta resultados en pantalla
    resultTotalElem.innerHTML = '$' + total.toLocaleString();
    resultAmountElem.innerHTML = amountElem.value;
    resultColorElem.style.backgroundColor = colorElem.value;

}